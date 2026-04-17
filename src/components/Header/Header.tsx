import LogoLight from "../../assets/svg/logo-light-theme.svg?react";
import LogoDark from "../../assets/svg/logo-dark-theme.svg?react";
import Moon from "../../assets/svg/icon-moon.svg?react";
import Sun from "../../assets/svg/icon-sun.svg?react";
import { useState } from "react";

const Header = () => {
  const [darkMode, _setDarkMode] = useState(false);

  return (
    <header className="mb-10">
      <div className="flex justify-between items-center mb-10 h-16">
        <div>
          {!darkMode && <LogoLight />}
          {darkMode && <LogoDark />}
        </div>
        <div className="w-8 h-8 bg-neutral-100 rounded-md grid place-content-center cursor-pointer">
          {!darkMode && <Moon />}
          {darkMode && <Sun />}
        </div>
      </div>
      <h1 className="text-bold text-[40px] tracking-[-1px] leading-[100%] text-center ">
        Analyze your text in real-time.
      </h1>
    </header>
  );
};

export default Header;
