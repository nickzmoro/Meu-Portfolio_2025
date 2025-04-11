// import do React ou bibliotecas
import { Swiper, SwiperSlide } from "swiper/react";

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
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              E-COMMERCE - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Maq Soft</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simplsy dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
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
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">Meu Portfólio</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simplsy dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
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
          <img src={DolcciB} alt="" className="img" loading="lazy" />
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              E-COMMERCE BÁSICO - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Dolcci'B</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
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
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              LANDING PAGE - Freelance
            </span>
            <h2 className="text-[1.3rem] font-[600]">Marcas do André</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
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
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">Conversor de Moedas</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
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
          <img src={ToDoList} alt="" className="img" loading="lazy" />
        </div>
        <div className="content-container">
          <div className="project-info-container">
            <span className="text-[0.92rem] text-[#5564FF]">
              Projeto Pessoal
            </span>
            <h2 className="text-[1.3rem] font-[600]">To-Do-List</h2>
            <p className="text-[0.95rem] text-[#ccc] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-[500] text-[1rem]">Tecnologias utilizadas</p>
            <div className="tech-container">
              <Tech name="HTML5" img="./assets/html.png" />
              <Tech name="CSS3" img="./assets/css.png" />
              <Tech name="JavaScript" img="./assets/javascript.png" />
              <Tech name="ReactJS" img="./assets/react.png" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;
