import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import * as S from "./Form.styles";
import { Images } from "../../../../assets";
import { useLanguageContext } from "../../../../context/useLanguageContext";
import React from "react";

const SERVICE_ID = "service_jh6ayee";
const TEMPLATE_ID = "template_xk55a32";
const USER_ID = "rlaPYU6JTS3p4RwyR";

export const FormSection: React.FC = () => {
  const T = useLanguageContext();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message sent sucessfully 👍",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Something went wrong 🙃",
          text: error.text,
        });
      }
    );
    e.currentTarget.reset();
  };

  return (
    <S.FormContainer>
      <S.StyledForm onSubmit={sendEmail}>
        <S.Wrapper>
          <S.StyledInput
            placeholder={T.components.contact.formContent.name}
            type="text"
            name="user_name"
            id="form-input-control-name"
            required
          />
          <S.StyledInput
            placeholder={T.components.contact.formContent.email}
            type="email"
            name="user_email"
            id="form-input-control-email"
            required
          />
        </S.Wrapper>
        <S.StyledTextArea
          placeholder={T.components.contact.formContent.message}
          name="message"
          id="form-textarea-control-opinion"
          required
        />
        <S.StyledButton type="submit" value="Send" color="green">
          {T.components.contact.formContent.button}
          <S.Image src={Images.message} />
        </S.StyledButton>
      </S.StyledForm>
    </S.FormContainer>
  );
};
