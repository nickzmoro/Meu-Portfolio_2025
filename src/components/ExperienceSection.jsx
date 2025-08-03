// import libs
import { useTranslation } from "react-i18next";

// components
import CardXp from "./ui/card/cardXp";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="experience w-screen min-h-screen flex justify-center items-center max-sm:py-[50px] mt-5"
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
        <div className="timeline-container relative max-w-6xl w-screen mx-auto mt-10">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/20"></div>

          <div className="space-y-16">
            {/* Primeiro item - Esquerda */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8">
                <CardXp
                  date="2024 - Atual"
                  title={t("experience.2024-title")}
                  description={t("experience.2024-paragraph")}
                  technologies={[
                    { name: "HTML5", img: "/assets/html.png" },
                    { name: "CSS3", img: "/assets/css.png" },
                    { name: "JavaScript", img: "/assets/javascript.png" },
                    { name: "TypeScript", img: "/assets/typescript.png" },
                    { name: "ReactJS", img: "/assets/react.png" },
                    { name: "Next.js", img: "/assets/nextjs.png" },
                    { name: "Git", img: "/assets/git.png" },
                    { name: "Bootstrap", img: "/assets/bootstrap.png" },
                    {
                      name: "TailwindCSS",
                      img: "/assets/tailwind-css.png",
                    },
                    {
                      name: "Styled-Components",
                      img: "/assets/styled-components.png",
                    },
                  ]}
                  dataAos={"fade-left"}
                />
              </div>
              <div className="relative flex-shrink-0 w-2 h-2 bg-[#ffffff] rounded-full shadow-lg"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Segundo item - Direita */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="relative flex-shrink-0 w-2 h-2 bg-[#ffffff] rounded-full shadow-lg"></div>
              <div className="w-1/2 pl-8">
                <CardXp
                  date="2024 - Atual"
                  title={t("experience.2024-title-hdinox")}
                  description={t("experience.2024-paragraph-hdinox")}
                  dataAos={"fade-left"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
