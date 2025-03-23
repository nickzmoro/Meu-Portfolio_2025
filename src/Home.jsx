import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import Header from "./components/header/header";
import "./Home.css";

import programmer from "./assets/images/emoji-programmer.png";
import spotlight from "./assets/images/spotlight.png";
import bgHome from "./assets/images/background-home.png";

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
                <h3 className="text-[#404CD1] uppercase spacing tracking-[2px]">
                  Introdução
                </h3>
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
      </main>
    </>
  );
}

export default Home;
