// imports libs
import { useTranslation } from "react-i18next";

// components
import ProgressBarSkills from "./ui/progressBarSkills/skills";

// images
import gitHubLogo from "../assets/images/github-svg.svg";

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="skills relative w-screen min-h-screen flex justify-center items-center max-sm:py-[100px]"
      id="habilidades"
    >
      <div className="skills-container w-[80%] h-[90%] flex flex-col justify-center items-center gap-10 max-sm:w-[90%]">
        <div
          className="section-title-container flex flex-col gap-2 items-center"
          data-aos="zoom-in"
        >
          <h3 className="section-name">{t("techs.subtitle")}</h3>
          <h2 className="subtitle">{t("techs.title")}</h2>
          <div className="line-divisor-content mt-2"></div>
        </div>
        <div className="skills-container">
          <div className="skills-grid flex justify-between gap-40 max-xl:flex-col max-xl:gap-4">
            <div className="flex flex-col gap-4">
              <ProgressBarSkills
                children={"HTML5"}
                sizeProgressBar={"100%"}
                colorTechnology={"bg-[#E44D25]"}
                aosDelay={50}
              />
              <ProgressBarSkills
                children={"CSS3"}
                sizeProgressBar={"100%"}
                colorTechnology={"bg-[#0089CA]"}
                aosDelay={100}
              />
              <ProgressBarSkills
                children={"JavaScript"}
                sizeProgressBar={"98%"}
                colorTechnology={"bg-[#F0DB4F]"}
                aosDelay={150}
              />
              <ProgressBarSkills
                children={"TypeScript"}
                sizeProgressBar={"75%"}
                colorTechnology={"bg-[#3178C6]"}
                aosDelay={200}
              />
              <ProgressBarSkills
                children={"React.JS"}
                sizeProgressBar={"95%"}
                colorTechnology={"bg-[#57BDD9]"}
                aosDelay={250}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <ProgressBarSkills
                  children={"Git"}
                  sizeProgressBar={"95%"}
                  colorTechnology={"bg-[#F05133]"}
                  aosDelay={300}
                />
                <ProgressBarSkills
                  children={"Bootstrap"}
                  sizeProgressBar={"75%"}
                  colorTechnology={"bg-[#7311F6]"}
                  aosDelay={350}
                />
                <ProgressBarSkills
                  children={"TailwindCSS"}
                  sizeProgressBar={"100%"}
                  colorTechnology={"bg-[#38BDF8]"}
                  aosDelay={400}
                />
                <ProgressBarSkills
                  children={"Next.JS"}
                  sizeProgressBar={"50%"}
                  colorTechnology={"bg-[#bebebe]"}
                  aosDelay={400}
                />
              </div>

              <div
                className="flex flex-col gap-2 mt-4"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <p className="font-semibold text-[1.1rem]">
                  {t("techs.tools")}
                </p>
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
  );
};

export default SkillsSection;
