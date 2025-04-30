import { FaArrowUp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-screen h-auto flex items-center justify-center border-t border-[#ffffff17] bg-[#000315]">
        <div className="footer-container w-[80%] h-full py-10 flex flex-col gap-6">
          <div className="flex justify-between max-lg:flex-col">
            <div>
              <h3 href="#" className="text-3xl font-[700] uppercase mb-1">
                Nicolas<span className="text-[#404CD1]">M.</span>
              </h3>
              <p>nicolasmororuiz@gmail.com</p>
              <p className="text-[#ccc]">(14) 99666-1883</p>
            </div>
            <div className="flex flex-wrap gap-[70px] max-xl:gap-[25px] max-lg:mt-6">
              <div className="nav-container">
                <p className="mb-1">Início</p>
                <a href="#" className="nav-link">
                  Voltar ao topo
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">Sobre</p>
                <a href="#sobre-mim" className="nav-link">
                  Sobre mim
                </a>
                <a href="#sobre-mim" className="nav-link">
                  Currículo
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">Habilidades</p>
                <a href="#habilidades" className="nav-link">
                  Tecnologias
                </a>
                <a href="#habilidades" className="nav-link">
                  Ferramentas
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">Projetos</p>
                <a href="#projetos" className="nav-link">
                  Ver projetos
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">Experiências</p>
                <a href="#experiência" className="nav-link">
                  Minha jornada
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#ffffff17] flex justify-between items-center">
            <p className="text-[#eee]">
              Copyright &copy; {currentYear} | Todos os direitos reservados.
            </p>
            <a
              href="#"
              className="px-2 py-2 rounded-[5px] bg-[#404cd110] border border-[#404cd1] hover:bg-[#404cd128] transition-all ease-in-out duration-200"
            >
              <FaArrowUp fill="#404cd1" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
