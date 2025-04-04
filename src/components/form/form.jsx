import { useState } from "react";
import bgForm from "../../assets/images/background-form.png";
import "./form.css";
import { ClipLoader } from "react-spinners";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

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
      ? `Erro. Envie novamente mais tarde..`
      : `Obrigado pelo contato! Responderei assim que possível.`;

    return (
      <div className="formcarry-block mt-3">
        <div
          className={`formcarry-message-block active relative flex justify-start px-10 py-6 rounded-[6px] bg-[#080916] border-l-[4px] ${
            error ? "border-l-[#FF0000]" : "border-l-[#5564FF]"
          }`}
        >
          <div className="fc-message-content text-[0.95rem]">{message}</div>
          <div
            className={`fc-message-close absolute top-[10px] right-[15px] px-[2px] py-[2px] rounded-full cursor-pointer ${
              error
                ? "bg-[#ff000027] hover:bg-[#ff000018]"
                : "bg-[#5563ff21] hover:bg-[#5563ff31]"
            } bg-[#5563ff21] transition-all ease-in-out duration-200`}
            onClick={() => resetStates()}
          >
            <IoClose fill={`${error ? "#FF0000" : "#5564FF"}`} size={22} />
          </div>
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
          <div className="px-[60px] py-[50px] flex flex-col gap-5">
            <div>
              <h3 className="subtitle mb-2">
                <span className="text-[#5564FF]">&lt;</span>Entre em contato
                <span className="text-[#5564FF]">&#47;&gt;</span>
              </h3>
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
                  className="form-input resize-none"
                ></textarea>
              </div>

              <div className="formcarry-block">
                {loading ? (
                  <button
                    type="submit"
                    className="group brightness-50 min-w-full h-[45px] bg-[#5564FF] rounded-[6px] mt-3 font-[500] flex items-center justify-center"
                    disabled={loading}
                  >
                    <ClipLoader color="#fff" size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="group min-w-full h-[45px] bg-[#5564FF] rounded-[6px] mt-3 font-[500] flex items-center justify-center hover:bg-[#5563ffdc] transition-all ease-in-out duration-200"
                    disabled={loading}
                  >
                    <>Enviar</>
                  </button>
                )}
              </div>

              {showNotification && renderStatus()}
            </form>
          </div>
          <div className="w-[40%] relative">
            <div className="gradient-img absolute w-full h-full bg-[linear-gradient(to_right,#0C0E23_10%,#0c0e2350_100%)]"></div>
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
