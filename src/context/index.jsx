import { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme:dark)");

    if (theme.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
