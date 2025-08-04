import { useTranslation } from "react-i18next";
import Tech from "../techs/tech";
import { LuAward, LuCalendar, LuMapPin } from "react-icons/lu";
import { FiAward, FiCalendar } from "react-icons/fi";
import { FaAward, FaMapPin, FaRegCalendar } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";

const CardXp = ({
  date,
  title,
  description,
  bussiness,
  local,
  technologies,
  dataAos,
  achievementTopics,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="card-container group relative overflow-hidden px-7 py-7 bg-[#ffffff1e] rounded-xl border border-[#ffffff17] min-w-[500px] hover:shadow-[0_8px_30px_-4px_hsl(233_100%_67%_/0.1)]"
        data-aos={dataAos}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[#5564FF]" />
        <div>
          {/*<p className="text-[0.9rem] text-[#5564FF] font-[500] mb-2">{date}</p>*/}
          <h3 className="text-[1.15rem]/[1.3] font-semibold mb-2 group-hover:text-[#5564FF] transition-all ease-in-out duration-200">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center font-semibold">
              <p>{bussiness}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <FaMapPin fill="#9CA3A4" size={12} />
              <span className="text-gray-400 text-[0.95rem]">{local}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaRegCalendar fill="#9CA3A4" size={12} />
              <span className="text-gray-400 text-[0.95rem]">{date}</span>
            </div>
          </div>
          <p className="mt-2 text-gray-300 text-[0.95rem]">{description}</p>
        </div>
        {technologies && technologies.length > 0 && (
          <>
            <div className="my-5">
              <div className="flex items-center gap-2 mb-3">
                <IoMdCode fill="#5564FF" size={18} />
                <h4 className="font-[500]">{t("experience.techs")}</h4>
              </div>

              <div className="technologies-container flex flex-wrap gap-[5px]">
                {technologies.map((item, index) => (
                  <Tech img={item.img} name={item.name} key={index} />
                ))}
              </div>
            </div>
          </>
        )}
        {achievementTopics && achievementTopics.length > 0 && (
          <>
            <div className="w-[100%] h-[1px] bg-[#ffffff1e] my-5"></div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <LiaAwardSolid fill="#5564FF" size={18} />
                <h4 className="font-[500]">{t("experience.learning")}</h4>
              </div>
              <ul className="flex flex-col gap-1">
                {achievementTopics.map((item, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <div className="w-[5px] h-[5px] bg-[#5564FF] rounded-full"></div>
                    <li className="text-gray-400 text-[0.9rem]">
                      {item.description}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardXp;
