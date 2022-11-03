import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { theme } from "../styles/theme";
import * as S from "./App.styles";
import { Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.AppContainer>
        <Header />
        <>
          <Routes>
            {ROUTES.map(({ path, name, component: View }) => (
              <Route path={path} key={name} element={<View />}></Route>
            ))}
          </Routes>
        </>
        <Footer />
      </S.AppContainer>
    </ThemeProvider>
  );
};

export default App;
