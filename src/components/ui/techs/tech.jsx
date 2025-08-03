const Tech = ({ key, img, name }) => {
  return (
    <div
      key={key}
      className="group flex gap-1 items-center px-[10px] py-[2px] bg-[#ffffff0e] rounded-full border border-[#ffffff17] w-fit hover:bg-[#5563ff10] hover:border-[#5563ff94] transition-all ease-in-out duration-200"
    >
      <img
        src={img}
        alt={name}
        className={`${
          (name === "JavaScript") | (name === "TypeScript")
            ? "rounded-[2px] py-[3px]"
            : "w-[20px]"
        } h-[20px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-200`}
      />
      <p className="text-[#808080] text-[0.95rem] font-[500] group-hover:text-[#ffffffc4] transition-all ease-in-out duration-200 cursor-default">
        {name}
      </p>
    </div>
  );
};

export default Tech;
