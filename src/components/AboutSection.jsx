// import libs
import { useTranslation } from "react-i18next";

// files
import me from "../assets/images/me.png";
import MeuCurriculo from "../assets/Meu-curriculo.pdf";

// icons
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="about w-screen min-h-screen flex justify-center items-center max-sm:py-[100px]"
      id="sobre-mim"
    >
      <div className="about-container w-[80%] h-[53%] flex justify-center items-center px-5 max-sm:w-[98%]">
        <div className="card-about h-full flex max-xl:flex-col items-start gap-8 px-8 py-8 max-sm:p-6 border-[1px] border-[#ffffff15] bg-[#0C0E23] rounded-[20px]">
          <div className="my-image max-xl:w-full" data-aos="zoom-in">
            <img
              src={me}
              alt="Me"
              loading="lazy"
              className="max-xl:object-cover max-xl:w-full max-xl:h-[300px] rounded-[100px] max-sm:h-[150px]"
            />
          </div>
          <div className="about-description h-full w-full flex flex-col justify-between">
            <div>
              <h3 className="section-name" data-aos="fade-left">
                {t("aboutMe.subtitle")}
              </h3>
              <h2 className="subtitle" data-aos="fade-left">
                {t("aboutMe.title")}
              </h2>
              <div
                className="line-divisor-content mt-2.5 mb-5"
                data-aos="fade-left"
              ></div>
              <p
                className="about-description-p mb-1.5"
                data-aos="fade-left"
                data-aos-delay="50"
              >
                {t("aboutMe.paragraph-top")}
              </p>
              <p
                className="about-description-p mb-1.5"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                {t("aboutMe.paragraph-mid")}
              </p>
              <p
                className="about-description-p"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                {t("aboutMe.paragraph-bottom")}
              </p>
            </div>
            <div>
              <div className="w-full h-[1px] bg-[#ffffff4b] mt-3 mb-3"></div>
              <div
                className="buttons flex items-center"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <a
                  href={MeuCurriculo}
                  className="flex items-center mr-3 px-4 py-2 border-[1px] border-[#ffffff4b] rounded-[15px] hover:bg-[#111330] hover:transition ease-in-out duration-200"
                  download="Meu-curriculo.pdf"
                >
                  {t("header.downloadCv")}
                  <HiOutlineDownload
                    className="ml-[2px] flex stroke-[#fff]"
                    size={18}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/devnicolas"
                  target="_blank"
                  className="group flex items-center gap-[2px] h-[35px] border-l-[1px] pl-3 border-l-[#cccccc7e] text-[#ccc] hover:text-[#fff] hover:transition ease-in-out duration-200"
                >
                  {t("aboutMe.seeMore")}
                  <MdOutlineArrowOutward
                    size={20}
                    className="fill-[#ccc] group-hover:fill-[#fff] transition ease-in-out duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
