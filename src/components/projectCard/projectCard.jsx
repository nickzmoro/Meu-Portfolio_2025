// import do React ou bibliotecas
import { Swiper, SwiperSlide } from "swiper/react";
import { TbApi } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";

// import de imagens e arquivos
import DolcciB from "../../assets/images/projects/dolcci-b.png";
import MaqSoft from "../../assets/images/projects/maq-soft.png";
import MeuPortfolio from "../../assets/images/projects/portfolio.png";
import MarcasDoAndre from "../../assets/images/projects/marcas-do-andre.png";
import ConversorDeMoedas from "../../assets/images/projects/conversor-moedas.png";
import ToDoList from "../../assets/images/projects/to-do-list-react.png";
import Slide from "../projectSlide/projectSlide.jsx";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={25}
      grabCursor={false}
      style={{ height: "auto" }}
      className="mySwiper w-[100%] h-auto -z-10"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
    >
      <SwiperSlide>
        <Slide
          nameProject={"Maq Soft"}
          img={MaqSoft}
          description={t("projects.description-MaqSoft")}
          type={"E-COMMERCE - Freelance"}
          linkGithub={"https://github.com/nickzmoro/Maq-Soft"}
          linkDeploy={"https://maqsoft-sorvetes.com.br"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "CSS3",
              img: "/assets/css.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
            {
              name: "ReactJS",
              img: "/assets/react.png",
            },
            {
              name: "Styled-Components",
              img: "/assets/styled-components.png",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          nameProject={"Portfólio"}
          img={MeuPortfolio}
          description={t("projects.description-Portfolio")}
          type={t("projects.typeProject")}
          linkGithub={"https://github.com/nickzmoro/Meu-Portfolio_2025"}
          linkDeploy={"#"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
            {
              name: "ReactJS",
              img: "/assets/react.png",
            },
            {
              name: "TailwindCSS",
              img: "/assets/tailwind-css.png",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          nameProject={"To-Do-List"}
          img={ToDoList}
          description={t("projects.description-ToDoList")}
          type={t("projects.typeProject")}
          linkGithub={"https://github.com/nickzmoro/To-Do-List-ReactJS"}
          linkDeploy={"https://to-do-list-react-js-peach.vercel.app/"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "CSS3",
              img: "/assets/css.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
            {
              name: "ReactJS",
              img: "/assets/react.png",
            },
            {
              name: "Styled-Components",
              img: "/assets/styled-components.png",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          nameProject={"Dolcci'B"}
          img={DolcciB}
          description={t("projects.description-DolcciB")}
          type={"E-COMMERCE BÁSICO - Freelance"}
          linkGithub={"https://github.com/nickzmoro/Dolcci-B"}
          linkDeploy={"https://dolccib.netlify.app/"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "CSS3",
              img: "/assets/css.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          nameProject={"Marcas do André"}
          img={MarcasDoAndre}
          description={t("projects.description-MarcasDoAndre")}
          type={"LANDING PAGE - Freelance"}
          linkGithub={"https://github.com/nickzmoro/Marcas-do-Andr-"}
          linkDeploy={"https://marcasdoandre.netlify.app/"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "CSS3",
              img: "/assets/css.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          nameProject={"Conversor de Moedas"}
          img={ConversorDeMoedas}
          description={t("projects.description-Conversor")}
          type={t("projects.typeProject")}
          linkGithub={"https://github.com/nickzmoro/conversor-de-moedas"}
          linkDeploy={"https://conversordemoedas-nicolas.netlify.app/"}
          tech={[
            {
              name: "HTML5",
              img: "/assets/html.png",
            },
            {
              name: "CSS3",
              img: "/assets/css.png",
            },
            {
              name: "JavaScript",
              img: "/assets/javascript.png",
            },
            {
              name: "API",
              img: "/assets/api.png",
            },
          ]}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;
