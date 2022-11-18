import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { theme } from "../styles/theme";
import * as S from "./App.styles";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { DictionaryLanguage } from "../types/locale";
import { LanguageContext } from "../context/useLanguageContext";
import { useRouteDef } from "../hooks/useRouteDef";

export const App = () => {
  const [language, setLanguage] = useState<DictionaryLanguage>(
    DictionaryLanguage.EN
  );
  const { ROUTES } = useRouteDef();
  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language }}>
        <S.AppContainer>
          <Header setLanguage={setLanguage} />
          <Routes>
            {ROUTES.map(({ path, name, component: View }) => (
              <Route path={path} key={name} element={<View />}></Route>
            ))}
          </Routes>
          <Footer />
        </S.AppContainer>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
};

export default App;
