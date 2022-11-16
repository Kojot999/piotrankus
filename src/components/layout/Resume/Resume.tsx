import { Files, Images } from "../../../assets";
import { useLanguageContext } from "../../../context/useLanguageContext";
import { Download } from "../../widgets";
import * as S from "./Resume.styles";

export const Resume = () => {
  const T = useLanguageContext();
  return (
    <S.ResumeContainer>
      <S.Wrapper>
        <S.TextContainer>
          <S.Header>{T.components.resume.header}</S.Header>
          <S.Text>{T.components.resume.text}</S.Text>
        </S.TextContainer>
        <Download
          text={T.components.resume.download}
          file={Files.cv}
          img={Images.pdf}
        ></Download>
      </S.Wrapper>
      <S.ResumeImage src={Images.resume} />
    </S.ResumeContainer>
  );
};
