const CardXp = ({ date, title, description, technologies }) => {
  return (
    <>
      <div className="card-container px-7 py-7 bg-[#ffffff1e] rounded-xl border border-[#ffffff17] h-[fit-content]">
        <div>
          <p className="text-[0.9rem] text-[#5564FF] font-[500]">{date}</p>
          <h3 className="text-[1.15rem]/[1.3] font-semibold max-w-[350px]">
            {title}
          </h3>
          <p className="max-w-[350px] mt-2 text-[#ccc]">{description}</p>
        </div>
        {technologies && technologies.length > 0 && (
          <>
            <div className="w-[100%] h-[1px] bg-[#ffffff1e] my-3"></div>
            <div>
              <h4 className="font-[500] mb-3">Principais tecnologias:</h4>
              <div className="technologies-container flex flex-wrap gap-[5px] max-w-[350px]">
                {technologies.map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-1 items-center px-[10px] py-[2px] bg-[#ffffff0e] rounded-full border border-[#ffffff17] cursor-default"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`${
                        item.name === "JavaScript"
                          ? "w-[16px] h-[16px] mr-[1px]"
                          : "w-[22px]"
                      } h-[22px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-200`}
                    ></img>
                    <p className="text-[#808080] text-[0.95rem] font-[500] group-hover:text-[#ffffffc4] transition-all ease-in-out duration-200">
                      {item.name}
                    </p>
                  </div>
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
