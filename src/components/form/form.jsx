import { useState } from "react";
import bgForm from "../../assets/images/background-form.png";
import "./form.css";
import { FaRocket } from "react-icons/fa6";
import { RingLoader } from "react-spinners";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function resetStates() {
    setSubmitted(false);
    setError("");
    setLoading(false);
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
    setLoading(true);

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
        setTimeout(() => {
          setLoading(false);
          if (response.code === 200) {
            setSubmitted(true);
            resetForm();
          } else {
            setError(response.message);
          }
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
          setError(error.message ? error.message : error);
        }, 1000);
      });
  }

  const showNotification = submitted || error;

  function renderStatus() {
    let message = error
      ? `Algo deu errado.`
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
      <div className="w-[80%] h-[70%] bg-[#0C0E23] border border-[#ffffff15] rounded-xl overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="px-[60px] py-[60px] flex flex-col gap-5">
            <div>
              <h3 className="subtitle mb-2">Entre em contato</h3>
              <p className="text-[#ccc] text-[0.95rem]">
                Fico à disposição para conversarmos sobre projetos, ideias ou
                parcerias. <br /> Preencha o formulário abaixo e retornarei o
                mais breve possível.
              </p>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-3">
              <div className="form-block">
                <label htmlFor="name" className="text-[#ffffffe5]">
                  Seu nome<span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Digite o seu nome"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-block">
                <label htmlFor="email">
                  Seu e-mail<span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="exemplo@gmail.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-block">
                <label htmlFor="message">
                  Mensagem<span className="asterisk">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Digite a sua mensagem"
                  required
                  className="form-input"
                ></textarea>
              </div>

              <div className="formcarry-block">
                <button
                  type="submit"
                  className="group min-w-full h-[45px] bg-[#5564FF] rounded-[6px] mt-3 font-[500] flex items-center justify-center hover:bg-[#5563ffdc] transition-all ease-in-out duration-200"
                  disabled={loading}
                >
                  {loading ? (
                    <RingLoader color="#fff" size={23} />
                  ) : (
                    <>Enviar</>
                  )}
                </button>
              </div>

              {showNotification && renderStatus()}
            </form>
          </div>
          <div className="w-[40%]">
            <img
              src={bgForm}
              alt="background-form-coding"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
