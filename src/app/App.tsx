import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { theme } from "../styles/theme";
import * as S from "./App.styles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.AppContainer>
        <Header />

        <Footer />
      </S.AppContainer>
    </ThemeProvider>
  );
};

export default App;
