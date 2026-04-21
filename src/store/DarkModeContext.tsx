import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  enableDarkMode: (_: boolean) => {},
});

const localStorageDarkModeKey = "dark-mode";

const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode = (isDark: boolean) => {
    const isDarkBool = new Boolean(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem(localStorageDarkModeKey, isDarkBool.toString());
    setDarkMode(isDark);
  };

  useEffect(() => {
    const userThemePreference = () => {
      const darkModeMql =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
      const userPrefersDarkMode = darkModeMql && darkModeMql.matches;
      let isDark = false;

      if (window.localStorage.getItem(localStorageDarkModeKey)) {
        enableDarkMode(
          window.localStorage.getItem(localStorageDarkModeKey) == "true",
        );
        return;
      }

      if (userPrefersDarkMode) {
        isDark = true;
      }

      enableDarkMode(isDark);
    };

    userThemePreference();
  }, []);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        enableDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContextProvider, DarkModeContext };
