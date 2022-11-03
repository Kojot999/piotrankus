import { Images } from "../../../assets";
import { useTranslation } from "../../../hooks/useTranslations";
import * as S from "./Contact.styles";
import { FormSection } from "./Form/Form";

export const Contact = () => {
  const T = useTranslation();
  return (
    <S.ContactContainer>
      <S.TextContainer>
        <S.Header>{T.components.contact.header}</S.Header>
        <S.Text>{T.components.contact.text}</S.Text>
        <S.Container>
          <S.Wrapper>
            <S.Text>{T.components.contact.email}</S.Text>
            <S.ImgMail src={Images.mail} />
            <S.Email>ankuspiotr@gmail.com</S.Email>
          </S.Wrapper>
          <S.Wrapper>
            <S.Text>{T.components.contact.form}</S.Text>
            <S.ImgArrow src={Images.arrowDown} />
          </S.Wrapper>
        </S.Container>
        <FormSection />
      </S.TextContainer>
      <S.HireImage src={Images.hire} />
    </S.ContactContainer>
  );
};
