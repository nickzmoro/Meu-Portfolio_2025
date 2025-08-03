import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import Tech from "../techs/tech.jsx";

import "./projectSlide.css";
import { useTranslation } from "react-i18next";

const Slide = ({
  img,
  nameProject,
  linkGithub,
  linkDeploy,
  type,
  description,
  tech,
}) => {
  const { t } = useTranslation();

  return (
    <div className="carousel-container w-full max-sm:h-auto md:h-[650px]">
      <div className="container-img">
        <img src={img} alt={nameProject} className="img" loading="lazy" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#10122996] opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-5">
          <a href={linkGithub} target="_blank">
            <FaGithub
              size={35}
              className="hover:fill-[#d3d6fd] transition-all"
            />
          </a>
          <a href={linkDeploy} target="_blank">
            <HiLink size={35} className="hover:fill-[#d3d6fd] transition-all" />
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="project-info-container">
          <span className="text-[0.92rem] text-[#5564FF]">{type}</span>
          <h2 className="text-[1.3rem] font-[600]">{nameProject}</h2>
          <p className="text-[0.95rem] text-[#ccc] mt-2">{description}</p>
        </div>
        <div className="mt-3">
          <p className="font-[500] text-[1rem]">
            {t("projects.techs-subtitle")}
          </p>
          {tech && tech.length > 0 && (
            <div className="tech-container">
              {tech.map((tech, index) => (
                <div key={index}>
                  <Tech name={tech.name} img={tech.img} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide;
