const Tech = ({ key, img, name }) => {
  return (
    <div
      key={key}
      className="flex gap-1 items-center px-[10px] py-[2px] bg-[#ffffff0e] rounded-full border border-[#ffffff17] w-fit hover:bg-[#5563ff10] hover:border-[#5563ff94] saturate-0 hover:saturate-100 transition-all ease-in-out duration-200"
    >
      <img
        src={img}
        alt={name}
        className={`${
          (name === "JavaScript") | (name === "TypeScript")
            ? "rounded-[2px] py-[3px]"
            : "w-[20px]"
        } h-[20px] transition-all ease-in-out duration-200`}
      />
      <p className="text-[#808080] hover:text-[#dadada] text-[0.95rem] font-[500] transition-all ease-in-out duration-200 cursor-default">
        {name}
      </p>
    </div>
  );
};

export default Tech;
