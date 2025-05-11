// Import Swiper styles
import "swiper/css";

// ícones
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

// arquivos
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProgressBarSkills from "../../components/progressBarSkills/skills";
import "./Home.css";
import MeuCurriculo from "../../assets/Meu-curriculo.pdf";
import CardXp from "../../components/card/cardXp";
import FormContact from "../../components/form/form";
import ProjectsCard from "../../components/projectCard/projectCard";
import { useTranslation } from "react-i18next";

// images
import programmer from "../../assets/images/emoji-programmer.png";
import spotlight from "../../assets/images/spotlight.png";
import bgHome from "../../assets/images/background-home.png";
import me from "../../assets/images/me.png";
import gitHubLogo from "../../assets/images/github-svg.svg";
import SplashScreen from "../../components/splashScreen/SplashScreen";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SplashScreen />

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Home */}
        <section className="home w-screen min-h-screen relative flex justify-center items-center">
          <div className="spotlight absolute top-0 left-[-150px] opacity-50 pointer-events-none select-none">
            <img src={spotlight} alt="Spotlight" loading="lazy" />
          </div>
          <div className="spotlight absolute top-0 right-[-150px] scale-x-[-1] opacity-50 pointer-events-none select-none">
            <img src={spotlight} alt="Spotlight" loading="lazy" />
          </div>
          <div className="bg-home absolute top-0 left-0">
            <img
              src={bgHome}
              alt="Background"
              loading="lazy"
              className="w-screen h-screen object-cover z-[-1] pointer-events-none select-none bg-[linear-gradient(to_bottom,#0000006e_0%,#000319_100%)]"
            />
          </div>
          <div className="home-container w-[80%] h-[90%] flex justify-between items-center z-10 px-5 max-md:flex-col max-md:gap-8">
            <div className="introduction-txt">
              <div
                className="section-name flex items-center gap-4 mb-5"
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <div className="line-title w-[100px] h-[1px] bg-[#404CD1]"></div>
                <h3
                  className="section-name"
                  data-aos="fade-right"
                  data-aos-delay="1100"
                >
                  {t("home.subtitle")}
                </h3>
              </div>
              <h1
                className="uppercase font-bold text-[4.5rem]/[1.1] max-sm:text-[4rem]"
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                Nicolas <br />
                Moro
              </h1>
              <h2
                className="uppercase font-semibold text-[1.2rem] text-[#404CD1] mt-2"
                data-aos="fade-right"
                data-aos-delay="1300"
              >
                {t("home.stack")}
              </h2>
              <p
                className="text-[#ccc] max-w-[500px] mt-3 border-l-2 border-[#404CD1] pl-4"
                data-aos="fade-right"
                data-aos-delay="1400"
              >
                {t("home.description")}
              </p>
            </div>
            <div className="my-socials flex item-center gap-10">
              <div
                className="image-programmer max-lg:hidden"
                data-aos="zoom-out"
                data-aos-delay="1500"
              >
                <img
                  src={programmer}
                  alt="Programmer"
                  loading="lazy"
                  className="drop-shadow-[0_4px_50px_#404cd139] select-none"
                />
              </div>
              <div
                className="socials-media flex flex-col gap-2 items-center justify-center max-md:flex-row"
                data-aos="flip-left"
                data-aos-delay="1600"
              >
                <div className="line-socials w-[1px] h-[100px] bg-[#404CD1] max-md:w-[80px] max-md:h-[1px]"></div>
                <a
                  href="https://www.linkedin.com/in/devnicolas"
                  target="_blank"
                  className="social-icon"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/nickzmoro"
                  target="_blank"
                  className="social-icon"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.instagram.com/nickzmoro/"
                  target="_blank"
                  className="social-icon"
                >
                  <FaInstagram size={18} />
                </a>
                <div className="line-socials w-[1px] h-[100px] bg-[#404CD1] max-md:w-[80px] max-md:h-[1px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
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

        {/* Skills */}
        <section
          className="skills relative w-screen min-h-screen flex justify-center items-center max-sm:py-[100px]"
          id="habilidades"
        >
          <div className="skills-container w-[80%] h-[90%] flex flex-col justify-center items-center gap-10 max-sm:w-[90%]">
            <div
              className="section-title-container flex flex-col gap-2 items-center"
              data-aos="zoom-in"
            >
              <h3 className="section-name">{t("techs.subtitle")}</h3>
              <h2 className="subtitle">{t("techs.title")}</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="skills-container">
              <div className="skills-grid flex justify-between gap-40 max-xl:flex-col max-xl:gap-4">
                <div className="flex flex-col gap-4">
                  <ProgressBarSkills
                    children={"HTML5"}
                    sizeProgressBar={"500px"}
                    colorTechnology={"bg-[#E44D25]"}
                    aosDelay={50}
                  />
                  <ProgressBarSkills
                    children={"CSS3"}
                    sizeProgressBar={"500px"}
                    colorTechnology={"bg-[#0089CA]"}
                    aosDelay={100}
                  />
                  <ProgressBarSkills
                    children={"JavaScript"}
                    sizeProgressBar={"475px"}
                    colorTechnology={"bg-[#F0DB4F]"}
                    aosDelay={150}
                  />
                  <ProgressBarSkills
                    children={"TypeScript"}
                    sizeProgressBar={"250px"}
                    colorTechnology={"bg-[#3178C6]"}
                    aosDelay={200}
                  />
                  <ProgressBarSkills
                    children={"React.JS"}
                    sizeProgressBar={"450px"}
                    colorTechnology={"bg-[#57BDD9]"}
                    aosDelay={250}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <ProgressBarSkills
                      children={"Git"}
                      sizeProgressBar={"450px"}
                      colorTechnology={"bg-[#F05133]"}
                      aosDelay={300}
                    />
                    <ProgressBarSkills
                      children={"Bootstrap"}
                      sizeProgressBar={"350px"}
                      colorTechnology={"bg-[#7311F6]"}
                      aosDelay={350}
                    />
                    <ProgressBarSkills
                      children={"TailwindCSS"}
                      sizeProgressBar={"460px"}
                      colorTechnology={"bg-[#38BDF8]"}
                      aosDelay={400}
                    />
                  </div>

                  <div
                    className="flex flex-col gap-2 mt-4"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    <p className="font-semibold text-[1.1rem]">
                      {t("techs.tools")}
                    </p>
                    <div className="flex gap-1">
                      <div className="svg-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="32"
                          height="32"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#29b6f6"
                            d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
                          ></path>
                          <path
                            fill="#0277bd"
                            d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
                          ></path>
                          <path
                            fill="#0288d1"
                            d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
                          ></path>
                        </svg>
                      </div>
                      <div className="svg-box">
                        <img
                          src={gitHubLogo}
                          alt="Git Hub"
                          className="w-[32px] h-[32px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          className="projects w-screen min-h-screen flex justify-center items-center max-sm:py-[100px]"
          id="projetos"
        >
          <div className="projects-container w-[80%] h-[90%] flex flex-col justify-evenly gap-[50px] max-sm:w-[90%]">
            <div
              className="projects-title flex flex-col justify-center items-center gap-2"
              data-aos="zoom-in"
            >
              <h3 className="section-name">{t("projects.subtitle")}</h3>
              <h2 className="subtitle">{t("projects.title")}</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="projects-carousel z-10" data-aos="fade-up">
              <ProjectsCard />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          className="experience w-screen min-h-screen flex justify-center items-center max-sm:py-[50px]"
          id="experiência"
        >
          <div className="experience-content w-[80%] h-[60%] flex flex-col items-center justify-evenly gap-5 max-sm:w-[90%]">
            <div
              className="exp-title flex flex-col justify-center items-center gap-2"
              data-aos="zoom-in"
            >
              <h3 className="section-name">{t("experience.subtitle")}</h3>
              <h2 className="subtitle">{t("experience.title")}</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="exp-cards flex items-end gap-10 mt-5 max-lg:flex-col max-lg:gap-3 max-lg:items-center relative">
              <CardXp
                date="2023"
                title={t("experience.2023-title")}
                description={t("experience.2023-paragraph")}
                className="translate-y-5"
                dataAos={"fade-right"}
              />
              <div
                className="timeline flex flex-col items-center mb-10 max-lg:mb-0"
                data-aos="flip-left"
              >
                <div className="line-smaller w-[1px] h-[60px] bg-white max-lg:h-[25px] max-lg:bg-[#ffffff65]"></div>
                <div className="ball w-[25px] h-[25px] border border-white rounded-full hover:bg-[#404cd175] transition-all ease-in-out duration-200 max-lg:hidden"></div>
                <div className="line-bigger w-[1px] h-[120px] bg-white max-lg:hidden"></div>
                <div className="ball w-[25px] h-[25px] border border-white rounded-full hover:bg-[#404cd175] transition-all ease-in-out duration-200 max-lg:hidden"></div>
                <div className="line-smaller w-[1px] h-[60px] bg-white max-lg:hidden"></div>
              </div>
              <CardXp
                date="2024 - Atual"
                title={t("experience.2024-title")}
                description={t("experience.2024-paragraph")}
                technologies={[
                  { name: "HTML5", img: "/assets/html.png" },
                  { name: "CSS3", img: "/assets/css.png" },
                  { name: "JavaScript", img: "/assets/javascript.png" },
                  { name: "ReactJS", img: "/assets/react.png" },
                  { name: "Git", img: "/assets/git.png" },
                  { name: "Bootstrap", img: "/assets/bootstrap.png" },
                  { name: "TailwindCSS", img: "/assets/tailwind-css.png" },
                  {
                    name: "Styled-Components",
                    img: "/assets/styled-components.png",
                  },
                ]}
                dataAos={"fade-left"}
              />
            </div>
          </div>
        </section>

        {/* Form Contact */}
        <FormContact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
