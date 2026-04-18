import { createContext, useState } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (_: boolean) => {},
});

const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext>
  );
};

export { DarkModeContextProvider, DarkModeContext };
