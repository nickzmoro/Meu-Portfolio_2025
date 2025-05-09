import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa"; // ou outro ícone de sua preferência

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0C0E23] transform transition-all duration-1000 ease-in-out
      ${isExiting ? "translate-x-full" : "translate-x-0"}`}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div
          className={`transition-all duration-500 ${
            isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <FaCode className="animate-bounce" size={100} fill="#dde0ff" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
