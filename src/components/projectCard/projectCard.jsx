// import do React ou bibliotecas
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";

// import de imagens e arquivos
import DolcciB from "../../assets/images/projects/dolcci-b.png";
import MaqSoft from "../../assets/images/projects/maq-soft.png";
import MeuPortfolio from "../../assets/images/projects/portfolio.png";
import MarcasDoAndre from "../../assets/images/projects/marcas-do-andre.png";
import ConversorDeMoedas from "../../assets/images/projects/conversor-moedas.png";
import ToDoList from "../../assets/images/projects/to-do-list-react.png";
import Tech from "../techs/tech.jsx";

import "./projectCard.css";

const Projects = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={25}
      grabCursor={false}
      className="mySwiper w-[100%] h-auto -z-10"
    >
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={MaqSoft} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a href="https://github.com/nickzmoro/Maq-Soft" target="_blank">
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a href="https://maq-soft.vercel.app/" target="_blank">
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              E-COMMERCE - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Maq Soft</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Site institucional e funcional da sorveteria Maq Soft, com página
              inicial atrativa e carrinho de compras integrado para facilitar
              pedidos online.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
              <Tech name="ReactJS" img="./assets/react.png" />
              <Tech
                name="Styled-Components"
                img="./assets/styled-components.png"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={MeuPortfolio} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a
              href="https://github.com/nickzmoro/Meu-Portfolio_2025"
              target="_blank"
            >
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a href="#">
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">Meu Portfólio</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Portfólio com projetos front-end desenvolvidos com foco em design
              responsivo, usabilidade e soluções que geram resultados reais para
              clientes e empresas.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
              <Tech name="ReactJS" img="./assets/react.png" />
              <Tech name="TailwindCSS" img="./assets/tailwind-css.png" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={ToDoList} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a
              href="https://github.com/nickzmoro/To-Do-List-ReactJS"
              target="_blank"
            >
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a
              href="https://to-do-list-react-js-peach.vercel.app/"
              target="_blank"
            >
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">To-Do-List</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              To-Do List funcional desenvolvida com React e estilizada com
              Styled-Components, permitindo organização eficiente de tarefas com
              uma interface intuitiva e moderna.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
              <Tech name="ReactJS" img="./assets/react.png" />
              <Tech
                name="Styled-Components"
                img="./assets/styled-components.png"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={DolcciB} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a href="https://github.com/nickzmoro/Dolcci-B" target="_blank">
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a href="https://dolccib.netlify.app/" target="_blank">
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              E-COMMERCE BÁSICO - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Dolcci'B</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Site da doceria Dolcci'B com visual delicado, cardápio completo e
              sistema de carrinho para pedidos online rápidos, intuitivos e
              personalizados.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={MarcasDoAndre} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a
              href="https://github.com/nickzmoro/Marcas-do-Andr-"
              target="_blank"
            >
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a href="https://marcasdoandre.netlify.app/" target="_blank">
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              LANDING PAGE - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Marcas do André</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Portfólio desenvolvido para um designer, com layout minimalista e
              funcional, focado em apresentar e vender seus trabalhos com
              elegância e usabilidade.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-container">
        <div className="container-img">
          <img src={ConversorDeMoedas} alt="" className="img" loading="lazy" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
            <a
              href="https://github.com/nickzmoro/conversor-de-moedas"
              target="_blank"
            >
              <FaGithub
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
            <a
              href="https://conversordemoedas-nicolas.netlify.app/"
              target="_blank"
            >
              <HiLink
                size={35}
                className="hover:fill-[#d3d6fd] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">Conversor de Moedas</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Conversor de moedas integrado a uma API, permitindo converter
              valores em real para diversas moedas de forma prática, precisa e
              em tempo real.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;
