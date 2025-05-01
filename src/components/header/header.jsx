import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import MeuCurriculo from "../../assets/Meu-curriculo.pdf";
import "./header.css";
import { IoClose } from "react-icons/io5";
import { FaUser, FaCode, FaBrain } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [menuHamburguer, setMenuHamburguer] = useState(false);

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
        } ${menuHamburguer && "backdrop-blur-[25px]"}`}
      >
        <div className="container flex justify-between items-center">
          <div className="logo">
            <a href="#" className="text-3xl font-[700] uppercase">
              Nicolas<span className="text-[#404CD1]">M.</span>
            </a>
          </div>
          <div className="links-menu max-lg:hidden">
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
          <div className="btn-contact-cv flex items-center gap-2 max-lg:hidden">
            <a
              href="#contato"
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

          {/* Menu Hambúrguer (Mobile) */}
          <div className="menu-hamburguer hidden max-lg:block">
            <button
              className="flex flex-col gap-[5px] p-1"
              onClick={() => setMenuHamburguer(true)}
            >
              <div className="w-[25px] h-[2px] bg-white rounded-full"></div>
              <div className="w-[25px] h-[2px] bg-white rounded-full"></div>
              <div className="w-[25px] h-[2px] bg-white rounded-full"></div>
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 w-screen h-screen z-99 bg-[#0c0e23fa] backdrop-blur-[25px] transform transition-all duration-300 ease-in-out ${
              menuHamburguer ? "translate-x-0" : "translate-x-full"
            } ${!menuHamburguer && "pointer-events-none"}`}
          >
            <div className="flex justify-end px-10 py-6">
              <button onClick={() => setMenuHamburguer(false)}>
                <IoClose size={30} />
              </button>
            </div>
            <div className="flex w-full h-[80%] flex-col justify-between">
              <nav className="p-8">
                <ul className="flex flex-col gap-1">
                  <li className="group hover:bg-[#171b4dfa] p-2 pl-3 rounded-[8px]">
                    <a
                      href="#sobre-mim"
                      onClick={() => setMenuHamburguer(false)}
                      className="text-[1.1rem] text-[#dadada] font-[500] flex items-center gap-2 w-full h-full group-hover:text-[#fff]"
                    >
                      <FaUser
                        size={15}
                        fill="#dadada"
                        className="group-hover:fill-[#ffffff]"
                      />
                      Sobre mim
                    </a>
                  </li>
                  <li className="group hover:bg-[#171b4dfa] p-2 pl-3 rounded-[8px]">
                    <a
                      href="#habilidades"
                      onClick={() => setMenuHamburguer(false)}
                      className="text-[1.1rem] text-[#dadada] font-[500] flex items-center gap-2 w-full h-full group-hover:text-[#fff]"
                    >
                      <FaBrain
                        size={16}
                        fill="#dadada"
                        className="group-hover:fill-[#ffffff]"
                      />
                      Habilidades
                    </a>
                  </li>
                  <li className="group hover:bg-[#171b4dfa] p-2 pl-3 rounded-[8px]">
                    <a
                      href="#projetos"
                      onClick={() => setMenuHamburguer(false)}
                      className="text-[1.1rem] text-[#dadada] font-[500] flex items-center gap-2 w-full h-full group-hover:text-[#fff]"
                    >
                      <FaCode
                        size={18}
                        fill="#dadada"
                        className="group-hover:fill-[#ffffff]"
                      />
                      Projetos
                    </a>
                  </li>
                  <li className="group hover:bg-[#171b4dfa] p-2 pl-3 rounded-[8px]">
                    <a
                      href="#experiência"
                      onClick={() => setMenuHamburguer(false)}
                      className="text-[1.1rem] text-[#dadada] font-[500] flex items-center gap-2 w-full h-full group-hover:text-[#fff]"
                    >
                      <HiAcademicCap
                        size={18}
                        fill="#dadada"
                        className="group-hover:fill-[#ffffff]"
                      />
                      Experiências
                    </a>
                  </li>
                  <li className="group hover:bg-[#171b4dfa] p-2 pl-3 rounded-[8px]">
                    <a
                      href="#contato"
                      onClick={() => setMenuHamburguer(false)}
                      className="text-[1.1rem] text-[#dadada] font-[500] flex items-center gap-2 w-full h-full group-hover:text-[#fff]"
                    >
                      <MdEmail
                        size={18}
                        fill="#dadada"
                        className="group-hover:fill-[#ffffff]"
                      />
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="pt-5 mx-8 flex border-t border-t-[#ffffff69]">
                <a
                  href={MeuCurriculo}
                  className="flex items-center px-4 py-2 border-[1px] border-[#ffffff65] rounded-[15px] hover:bg-[#171b4dfa] hover:border-[#ffffff2c] transition ease-in-out duration-200"
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
