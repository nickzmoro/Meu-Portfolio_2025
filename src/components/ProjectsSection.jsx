// import libs
import { useTranslation } from "react-i18next";

// components
import ProjectsCard from "./ui/projectCard/projectCard";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default ProjectsSection;
