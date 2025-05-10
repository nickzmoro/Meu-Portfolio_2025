import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import MeuCurriculo from "../../assets/Meu-curriculo.pdf";
import "./header.css";
import { IoClose } from "react-icons/io5";
import { FaUser, FaCode, FaBrain } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Brasil from "../../assets/images/brasil.png";
import Eua from "../../assets/images/eua.png";
import Espanha from "../../assets/images/espanha.png";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
                    {t("header.aboutMe")}
                  </a>
                </li>
                <li>
                  <a href="#habilidades" className="link-menu">
                    {t("header.abilities")}
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="link-menu">
                    {t("header.projects")}
                  </a>
                </li>
                <li>
                  <a href="#experiência" className="link-menu">
                    {t("header.experiences")}
                  </a>
                </li>
                <li>
                  <a href="#contato" className="link-menu">
                    {t("header.contact")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="btn-contact-cv flex items-center gap-2">
            <a
              href={MeuCurriculo}
              className="flex items-center px-4 py-2 border-[1px] max-lg:hidden border-[transparent] rounded-[15px] hover:bg-[#111330] hover:border-[#111330] transition ease-in-out duration-200"
              download="Meu-curriculo.pdf"
            >
              {t("header.downloadCv")}
              <HiOutlineDownload
                className="ml-[2px] flex stroke-[#b4ceff]"
                size={18}
              />
            </a>
            <div className="flex flex-col items-center max-lg:absolute max-lg:top-[26px] max-lg:right-[80px]">
              <button
                className="relative flex items-center gap-1 bg-[#101229] py-1 px-2 border border-[#ffffff15] rounded-[8px] max-lg:bg-transparent max-lg:border-none max-lg:p-0"
                onClick={() => setDropDown((prev) => !prev)}
              >
                <TbWorld size={25} className="opacity-80 max-lg:opacity-100" />
                <IoIosArrowDown
                  className={`
                    ${dropDown ? "rotate-180" : "rotate-0"}
                    opacity-80
                    transition-transform duration-200 ease-in-out max-lg:hidden
                  `}
                />
              </button>
              {dropDown && (
                <div
                  className={`bg-[#151836] border border-[#ffffff15] absolute bottom-[-92px] max-lg:bottom-[-120px] w-[80px] h-auto px-1 py-2 rounded-[5px] flex flex-col items-center gap-1 transition-opacity duration-300 ease-in-out`}
                >
                  <div
                    className="group flex items-center gap-[6px] cursor-pointer"
                    onClick={() => {
                      changeLanguage("pt");
                      setDropDown(false);
                    }}
                  >
                    <img
                      src={Brasil}
                      alt="bandeira-brasil"
                      className="w-[25px]"
                    />
                    <p className="cursor-pointer font-[500] group-hover:opacity-85">
                      PT
                    </p>
                  </div>
                  <div className="w-[45px] h-[1px] bg-[#ffffff1e]"></div>
                  <div
                    className="group flex items-center gap-1 cursor-pointer"
                    onClick={() => {
                      changeLanguage("en");
                      setDropDown(false);
                    }}
                  >
                    <img src={Eua} alt="bandeira-eua" className="w-[25px]" />
                    <p className="cursor-pointer font-[500] group-hover:opacity-85">
                      EN
                    </p>
                  </div>
                  <div className="w-[45px] h-[1px] bg-[#ffffff1e]"></div>
                  <div
                    className="group flex items-center gap-1 cursor-pointer"
                    onClick={() => {
                      changeLanguage("es");
                      setDropDown(false);
                    }}
                  >
                    <img
                      src={Espanha}
                      alt="bandeira-espanha"
                      className="w-[25px]"
                    />
                    <p className="cursor-pointer font-[500] group-hover:opacity-85">
                      ES
                    </p>
                  </div>
                </div>
              )}
            </div>
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
