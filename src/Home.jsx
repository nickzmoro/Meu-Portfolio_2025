// import do React

// ícones
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

// arquivos
import Header from "./components/header/header";
import ProgressBarSkills from "./components/progressBarSkills/skills";
import "./Home.css";
import MeuCurriculo from "./assets/Meu-curriculo.pdf";

// images
import programmer from "./assets/images/emoji-programmer.png";
import spotlight from "./assets/images/spotlight.png";
import bgHome from "./assets/images/background-home.png";
import me from "./assets/images/me.png";
import gitHubLogo from "./assets/images/github-svg.svg";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Home */}
        <section className="home w-screen h-screen relative flex justify-center items-center">
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
          <div className="home-container w-[80%] h-[90%] flex justify-between items-center z-10 px-5">
            <div className="introduction-txt">
              <div className="section-name flex items-center gap-4 mb-5">
                <div className="line-title w-[100px] h-[1px] bg-[#404CD1]"></div>
                <h3 className="section-name">Introdução</h3>
              </div>
              <h1 className="uppercase font-bold text-[4.5rem]/[1.1]">
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
              <div className="image-programmer">
                <img
                  src={programmer}
                  alt="Programmer"
                  loading="lazy"
                  className="drop-shadow-[0_4px_50px_#404cd139] select-none"
                />
              </div>
              <div className="socials-media flex flex-col gap-2 items-center justify-center">
                <div className="line-socials w-[1px] h-[100px] bg-[#404CD1]"></div>
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
                <div className="line-socials w-[1px] h-[100px] bg-[#404CD1]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          className="about w-screen h-screen flex justify-center items-center"
          id="about-me"
        >
          <div className="about-container w-[80%] h-[53%] flex justify-center items-center px-5">
            <div className="card-about h-full flex items-start gap-8 px-8 py-8 border-[1px] border-[#ffffff15] bg-[linear-gradient(to_right,#04071D_0%,#0C0E23_100%)] rounded-[20px]">
              <div className="my-image">
                <img src={me} alt="Me" loading="lazy" />
              </div>
              <div className="about-description h-full flex flex-col justify-between">
                <div>
                  <h3 className="section-name">Sobre mim</h3>
                  <h2 className="subtitle">Quem eu sou?</h2>
                  <div className="line-divisor-content mt-2.5 mb-3"></div>
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
          className="skills relative w-screen h-screen flex justify-center items-center"
          id="skills"
        >
          <div className="skills-container w-[80%] h-[90%] flex flex-col justify-center items-center gap-10">
            <div className="section-title-container flex flex-col gap-2 items-center">
              <h3 className="section-name flex items-center">Tecnologias</h3>
              <h2 className="subtitle">Minhas Habilidades</h2>
              <div className="line-divisor-content mt-2"></div>
            </div>
            <div className="skills-container">
              <div className="skills-grid flex justify-between gap-40">
                <div className="flex flex-col gap-4">
                  <ProgressBarSkills
                    children={"HTML5"}
                    sizeProgressBar={"400px"}
                    colorTechnology={"bg-[#E44D25]"}
                  />
                  <ProgressBarSkills
                    children={"CSS3"}
                    sizeProgressBar={"350px"}
                    colorTechnology={"bg-[#0089CA]"}
                  />
                  <ProgressBarSkills
                    children={"JavaScript"}
                    sizeProgressBar={"350px"}
                    colorTechnology={"bg-[#F0DB4F]"}
                  />
                  <ProgressBarSkills
                    children={"TypeScript"}
                    sizeProgressBar={"150px"}
                    colorTechnology={"bg-[#3178C6]"}
                  />
                  <ProgressBarSkills
                    children={"React.JS"}
                    sizeProgressBar={"300px"}
                    colorTechnology={"bg-[#57BDD9]"}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <ProgressBarSkills
                      children={"Git"}
                      sizeProgressBar={"350px"}
                      colorTechnology={"bg-[#F05133]"}
                    />
                    <ProgressBarSkills
                      children={"Bootstrap"}
                      sizeProgressBar={"300px"}
                      colorTechnology={"bg-[#7311F6]"}
                    />
                    <ProgressBarSkills
                      children={"TailwindCSS"}
                      sizeProgressBar={"350px"}
                      colorTechnology={"bg-[#38BDF8]"}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
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
      </main>
    </>
  );
}

export default Home;
