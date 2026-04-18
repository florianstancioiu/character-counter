import LogoLight from "../../assets/svg/logo-light-theme.svg?react";
import LogoDark from "../../assets/svg/logo-dark-theme.svg?react";
import Moon from "../../assets/svg/icon-moon.svg?react";
import Sun from "../../assets/svg/icon-sun.svg?react";
import { useContext } from "react";
import { DarkModeContext } from "../../store/DarkModeContext";

const Header = () => {
  const { darkMode, enableDarkMode } = useContext(DarkModeContext);

  return (
    <header className="mb-10 md:max-w-176 md:mx-auto lg:max-w-247.5 lg:mb-12">
      <div className="flex justify-between items-center mb-10 h-16 lg:mb-12">
        <div className="cursor-pointer">
          {!darkMode && <LogoLight />}
          {darkMode && <LogoDark />}
        </div>
        <button
          onClick={() => enableDarkMode(!darkMode)}
          className={`${darkMode ? "bg-neutral-700" : "bg-neutral-100"} w-8 h-8  rounded-md grid place-content-center cursor-pointer`}
        >
          {!darkMode && <Moon />}
          {darkMode && <Sun />}
        </button>
      </div>
      <h1 className="font-bold text-[40px] tracking-[-1px] leading-[100%] text-center md:text-[64px] md:max-w-127.5 md:mx-auto">
        Analyze your text in real-time.
      </h1>
    </header>
  );
};

export default Header;
