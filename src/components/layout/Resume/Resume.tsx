import { Files, Images } from "../../../assets";
import { useTranslation } from "../../../hooks";
import { Download } from "../../widgets";
import * as S from "./Resume.styles";

export const Resume = () => {
  const T = useTranslation();
  return (
    <S.ResumeContainer>
      <S.Wrapper>
        <S.TextContainer>
          <S.Header>{T.components.resume.header}</S.Header>
          <S.Text>{T.components.resume.text}</S.Text>
        </S.TextContainer>
        <Download
          text="Download PDF"
          file={Files.cv}
          img={Images.pdf}
        ></Download>
      </S.Wrapper>
      <S.ResumeImage src={Images.resume} />
    </S.ResumeContainer>
  );
};
