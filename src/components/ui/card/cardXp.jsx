import { useTranslation } from "react-i18next";
import Tech from "../techs/tech";

const CardXp = ({ date, title, description, technologies, dataAos }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="card-container px-7 py-7 bg-[#ffffff1e] rounded-xl border border-[#ffffff17] min-h-[500px]:"
        data-aos={dataAos}
      >
        <div>
          <p className="text-[0.9rem] text-[#5564FF] font-[500] mb-2">{date}</p>
          <h3 className="text-[1.15rem]/[1.3] font-semibold mb-2">{title}</h3>
          <p className="mt-2 text-[#ccc]">{description}</p>
        </div>
        {technologies && technologies.length > 0 && (
          <>
            <div className="w-[100%] h-[1px] bg-[#ffffff1e] my-3"></div>
            <div>
              <h4 className="font-[500] mb-3">{t("experience.techs")}</h4>
              <div className="technologies-container flex flex-wrap gap-[5px]">
                {technologies.map((item, index) => (
                  <Tech img={item.img} name={item.name} key={index} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardXp;
