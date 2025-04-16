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

const Projects = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={25}
      grabCursor={false}
      className="mySwiper w-[100%] h-auto -z-10"
    >
      <SwiperSlide>
        <Slide
          nameProject={"Maq Soft"}
          img={MaqSoft}
          description={
            "Site institucional e funcional da sorveteria Maq Soft, com página inicial atrativa e carrinho de compras integrado para facilitar pedidos online."
          }
          type={"E-COMMERCE - Freelance"}
          linkGithub={"https://github.com/nickzmoro/Maq-Soft"}
          linkDeploy={"https://maq-soft.vercel.app/"}
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
          nameProject={"Meu Portfólio"}
          img={MeuPortfolio}
          description={
            "Portfólio com projetos front-end desenvolvidos com foco em design responsivo, usabilidade e soluções que geram resultados reais para clientes e empresas."
          }
          type={"Projeto Pessoal"}
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
          description={
            "To-Do List funcional desenvolvida com React e estilizada com Styled-Components, permitindo organização eficiente de tarefas com uma interface intuitiva e moderna."
          }
          type={"Projeto Pessoal"}
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
          description={
            "Site da doceria Dolcci'B com visual delicado, cardápio completo e sistema de carrinho para pedidos online rápidos, intuitivos e personalizados."
          }
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
          description={
            "Portfólio desenvolvido para um designer, com layout minimalista e funcional, focado em apresentar e vender seus trabalhos com elegância e usabilidade."
          }
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
          description={
            "Conversor de moedas integrado a uma API, permitindo converter valores em real para diversas moedas de forma prática, precisa e em tempo real."
          }
          type={"Projeto Pessoal"}
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
