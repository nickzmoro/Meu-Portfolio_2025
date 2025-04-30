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

// images
import programmer from "../../assets/images/emoji-programmer.png";
import spotlight from "../../assets/images/spotlight.png";
import bgHome from "../../assets/images/background-home.png";
import me from "../../assets/images/me.png";
import gitHubLogo from "../../assets/images/github-svg.svg";

function Home() {
  return (
    <>
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
              <div className="section-name flex items-center gap-4 mb-5">
                <div className="line-title w-[100px] h-[1px] bg-[#404CD1]"></div>
                <h3 className="section-name">Introdução</h3>
              </div>
              <h1 className="uppercase font-bold text-[4.5rem]/[1.1] max-sm:text-[4rem]">
                Nicolas <br />
                Moro
              </h1>
              <h2 className="uppercase font-semibold text-[1.2rem] text-[#404CD1] mt-2">
                Desenvolvedor Front-End
              </h2>
              <p className="text-[#ccc] max-w-[500px] mt-3 border-l-2 border-[#404CD1] pl-4">
                Desenvolvedor web apaixonado por criar experiências incríveis,
                com habilidades em HTML, CSS, JavaScript e React, sempre
                buscando aprimoramento e inovação.
              </p>
            </div>
            <div className="my-socials flex item-center gap-10">
              <div className="image-programmer max-lg:hidden">
                <img
                  src={programmer}
                  alt="Programmer"
                  loading="lazy"
                  className="drop-shadow-[0_4px_50px_#404cd139] select-none"
                />
              </div>
              <div className="socials-media flex flex-col gap-2 items-center justify-center max-md:flex-row">
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
          className="about w-screen min-h-screen flex justify-center items-center"
          id="sobre-mim"
        >
          <div className="about-container w-[80%] h-[53%] flex justify-center items-center px-5 max-sm:w-[95%]">
            <div className="card-about h-full flex max-xl:flex-col items-start gap-8 px-8 py-8 max-sm:p-6 border-[1px] border-[#ffffff15] bg-[linear-gradient(to_right,#04071D_0%,#0C0E23_100%)] rounded-[20px]">
              <div className="my-image max-xl:w-full">
                <img
                  src={me}
                  alt="Me"
                  loading="lazy"
                  className="max-xl:object-cover max-xl:w-full max-xl:h-[300px] rounded-[12px] max-sm:h-[150px]"
                />
              </div>
              <div className="about-description h-full w-full flex flex-col justify-between">
                <div>
                  <h3 className="section-name">Sobre mim</h3>
                  <h2 className="subtitle">Quem eu sou?</h2>
                  <div className="line-divisor-content mt-2.5 mb-5"></div>
                  <p className="about-description-p mb-1.5">
                    Sou um desenvolvedor front-end de 16 anos, focado em criar
                    interfaces modernas e responsivas. Trabalho em projetos
                    próprios e freelances, utilizando HTML, CSS, JavaScript,
                    além de Git, GitHub e TailwindCSS.
                  </p>
                  <p className="about-description-p mb-1.5">
                    Proativo, comunicativo e adaptável, valorizo o trabalho em
                    equipe e a busca por soluções criativas. Minha missão é
                    transformar ideias em projetos tecnológicos que entreguem
                    impacto e qualidade.
                  </p>
                  <p className="about-description-p">
                    Estou sempre aprendendo e evoluindo para criar experiências
                    digitais eficientes e inovadoras.
                  </p>
                </div>
                <div>
                  <div className="w-full h-[1px] bg-[#ffffff4b] mt-3 mb-3"></div>
                  <div className="buttons flex items-center">
                    <a
                      href={MeuCurriculo}
                      className="flex items-center mr-3 px-4 py-2 border-[1px] border-[#ffffff4b] rounded-[15px] hover:bg-[#111330] hover:transition ease-in-out duration-200"
                      download="Meu-curriculo.pdf"
                    >
                      Baixar CV
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
                      Veja mais
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
          className="skills relative w-screen min-h-screen flex justify-center items-center"
          id="habilidades"
        >
          <div className="skills-container w-[80%] h-[90%] flex flex-col justify-center items-center gap-10">
            <div className="section-title-container flex flex-col gap-2 items-center">
              <h3 className="section-name">Tecnologias</h3>
              <h2 className="subtitle">Minhas Habilidades</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="skills-container">
              <div className="skills-grid flex justify-between gap-40 max-xl:flex-col max-xl:gap-4">
                <div className="flex flex-col gap-4">
                  <ProgressBarSkills
                    children={"HTML5"}
                    sizeProgressBar={"500px"}
                    colorTechnology={"bg-[#E44D25]"}
                  />
                  <ProgressBarSkills
                    children={"CSS3"}
                    sizeProgressBar={"450px"}
                    colorTechnology={"bg-[#0089CA]"}
                  />
                  <ProgressBarSkills
                    children={"JavaScript"}
                    sizeProgressBar={"450px"}
                    colorTechnology={"bg-[#F0DB4F]"}
                  />
                  <ProgressBarSkills
                    children={"TypeScript"}
                    sizeProgressBar={"250px"}
                    colorTechnology={"bg-[#3178C6]"}
                  />
                  <ProgressBarSkills
                    children={"React.JS"}
                    sizeProgressBar={"400px"}
                    colorTechnology={"bg-[#57BDD9]"}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <ProgressBarSkills
                      children={"Git"}
                      sizeProgressBar={"450px"}
                      colorTechnology={"bg-[#F05133]"}
                    />
                    <ProgressBarSkills
                      children={"Bootstrap"}
                      sizeProgressBar={"400px"}
                      colorTechnology={"bg-[#7311F6]"}
                    />
                    <ProgressBarSkills
                      children={"TailwindCSS"}
                      sizeProgressBar={"450px"}
                      colorTechnology={"bg-[#38BDF8]"}
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-semibold text-[1.1rem]">Ferramentas:</p>
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
          className="projects w-screen min-h-screen flex justify-center items-center"
          id="projetos"
        >
          <div className="projects-container w-[80%] h-[90%] flex flex-col justify-evenly gap-[50px]">
            <div className="projects-title flex flex-col justify-center items-center gap-2">
              <h3 className="section-name">Projetos</h3>
              <h2 className="subtitle">Meus Projetos</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="projects-carousel z-10">
              <ProjectsCard />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          className="experience w-screen min-h-screen flex justify-center items-center"
          id="experiência"
        >
          <div className="experience-content w-[80%] h-[60%] flex flex-col items-center justify-evenly gap-5">
            <div className="exp-title flex flex-col justify-center items-center gap-2">
              <h3 className="section-name">Experiência</h3>
              <h2 className="subtitle">Minha Trajetória</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="exp-cards flex items-end gap-10 mt-5 max-lg:flex-col max-lg:gap-3 max-lg:items-center relative">
              <CardXp
                date="2023"
                title="Primeiro contato com a programação"
                description="Descobri a programação e me apaixonei por criar interfaces que geram valor e experiências únicas."
                className="translate-y-5"
              />
              <div className="timeline flex flex-col items-center mb-10 max-lg:mb-0 max-lg:absolute max-lg:top-[100px] max-lg:right-[-35px]">
                <div className="line-smaller w-[1px] h-[60px] bg-white"></div>
                <div className="ball w-[25px] h-[25px] border border-white rounded-full hover:bg-[#404cd175] transition-all ease-in-out duration-200"></div>
                <div className="line-bigger w-[1px] h-[120px] bg-white"></div>
                <div className="ball w-[25px] h-[25px] border border-white rounded-full hover:bg-[#404cd175] transition-all ease-in-out duration-200"></div>
                <div className="line-smaller w-[1px] h-[60px] bg-white"></div>
              </div>
              <CardXp
                date="2024 - Atual"
                title="Desenvolvedor Front-End Freelancer"
                description="Crio interfaces modernas, responsivas e focadas na experiência do usuário. Atuo em projetos para empresas ou pessoais, sempre com o objetivo de agregar valor real aos seus resultados por meio de soluções digitais eficientes."
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
