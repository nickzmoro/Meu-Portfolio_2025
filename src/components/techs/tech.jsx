const Tech = ({ img, name }) => {
  return (
    <div className="group flex gap-1 items-center px-[10px] py-[2px] bg-[#ffffff0e] rounded-full border border-[#ffffff17] w-fit">
      <img
        src={img}
        alt={name}
        className={`
            ${name === "JavaScript" ? "rounded-[2px] py-[3px]" : "w-[20px]"}
            h-[20px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-200`}
      />
      <p className="text-[#808080] text-[0.95rem] font-[500] group-hover:text-[#ffffffc4] transition-all ease-in-out duration-200">
        {name}
      </p>
    </div>
  );
};

export default Tech;
