import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import MeuCurriculo from "../../assets/Meu-curriculo.pdf";
import "./header.css";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  return (
    <>
      <header
        className={`w-screen flex fixed top-0 left-0 z-50 border-b border-b-[#fff1] justify-center px-10 py-5 transition ease-in-out duration-200 ${
          changeHeader
            ? "bg-[#ffffff02] backdrop-blur-[25px]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div className="logo">
            <a href="#" className="text-3xl font-[700] uppercase">
              Nicolas<span className="text-[#404CD1]">M.</span>
            </a>
          </div>
          <div className="links-menu">
            <nav>
              <ul className="flex gap-10">
                <li>
                  <a href="#sobre-mim" className="link-menu">
                    Sobre mim
                  </a>
                </li>
                <li>
                  <a href="#habilidades" className="link-menu">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="link-menu">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#experiência" className="link-menu">
                    Experiências
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="btn-contact-cv flex items-center gap-2">
            <a
              href="#"
              className="px-8 py-2 rounded-[15px] border-[1px] border-[#ffffff65] bg-[radial-gradient(circle_at_center,#141841_0%,#0C0E23_100%)] hover:brightness-90 transition ease-in-out duration-200"
            >
              Contato
            </a>
            <a
              href={MeuCurriculo}
              className="flex items-center px-4 py-2 border-[1px] border-[transparent] rounded-[15px] hover:bg-[#111330] hover:border-[#111330] transition ease-in-out duration-200"
              download="Meu-curriculo.pdf"
            >
              Baixar CV
              <HiOutlineDownload
                className="ml-[2px] flex stroke-[#b4ceff]"
                size={18}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
