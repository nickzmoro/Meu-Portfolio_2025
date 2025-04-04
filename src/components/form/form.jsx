import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function resetStates() {
    setSubmitted(false);
    setError("");
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    resetStates();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const MyFormcarryFormURL = "https://formcarry.com/s/23YOFG9oDOd";

    fetch(MyFormcarryFormURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSubmitted(true);
          resetForm();
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  const showNotification = submitted || error;

  function renderStatus() {
    let message = error
      ? error
      : `Obrigado por entrar em contato, em breve verei o que você tem para me dizer!`;
    let icon = error ? "error" : "success";

    return (
      <div className="formcarry-block">
        <div className={`formcarry-message-block fc-${icon} active`}>
          <div className="fc-message-icon"></div>
          <div className="fc-message-content">{message}</div>
          <div className="fc-message-close" onClick={() => resetStates()}></div>
        </div>
      </div>
    );
  }

  return (
    <section
      className="w-screen h-screen flex items-center justify-center"
      id="contato"
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formcarry-block">
          <label htmlFor="name">
            Seu nome<span>*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Digite o seu nome"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="email">
            Seu e-mail<span>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="exemplo@gmail.com"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="message">
            Mensagem<span>*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Digite a sua mensagem"
          ></textarea>
        </div>

        <div className="formcarry-block">
          <button type="submit">Enviar</button>
        </div>

        {showNotification && renderStatus()}
      </form>
    </section>
  );
};

export default Form;
