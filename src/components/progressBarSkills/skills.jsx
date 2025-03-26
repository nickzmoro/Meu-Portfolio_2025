const ProgressBarSkills = ({
  children,
  sizeProgressBar,
  colorTechnology = "bg-white",
}) => {
  return (
    <>
      <div>
        <p>{children}</p>
        <div className="w-[400px] h-3 relative bg-[#ffffff1e] z-10 border border-[#ffffff9d] rounded-full overflow-hidden">
          <div
            style={{ width: sizeProgressBar }}
            className={`absolute h-3 top-[-1px] left-[-1px] ${colorTechnology} rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBarSkills;
