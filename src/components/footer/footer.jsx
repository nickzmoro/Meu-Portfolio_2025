import { FaArrowUp } from "react-icons/fa";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
                <p className="mb-1">{t("footer.start.title")}</p>
                <a href="#" className="nav-link">
                  {t("footer.start.returnToTop-link")}
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">{t("footer.about.title")}</p>
                <a href="#sobre-mim" className="nav-link">
                  {t("footer.about.aboutMe-link")}
                </a>
                <a href="#sobre-mim" className="nav-link">
                  {t("footer.about.cv-link")}
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">{t("footer.abilities.title")}</p>
                <a href="#habilidades" className="nav-link">
                  {t("footer.abilities.tech-link")}
                </a>
                <a href="#habilidades" className="nav-link">
                  {t("footer.abilities.tool-link")}
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">{t("footer.projects.title")}</p>
                <a href="#projetos" className="nav-link">
                  {t("footer.projects.projects-link")}
                </a>
              </div>
              <div className="nav-container">
                <p className="mb-1">{t("footer.experience.title")}</p>
                <a href="#experiência" className="nav-link">
                  {t("footer.experience.xp-link")}
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#ffffff17] flex justify-between items-center">
            <p className="text-[#eee]">
              Copyright &copy; {currentYear} | {t("footer.copyright")}
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
