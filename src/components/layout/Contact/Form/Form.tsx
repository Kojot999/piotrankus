import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import * as S from "./Form.styles";
import { useTranslation } from "../../../../hooks";
import { Images } from "../../../../assets";

const SERVICE_ID = "service_jh6ayee";
const TEMPLATE_ID = "template_xk55a32";
const USER_ID = "rlaPYU6JTS3p4RwyR";

export const FormSection: React.FC = () => {
  const T = useTranslation();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.currentTarget.reset();
  };

  return (
    <S.FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <S.Wrapper>
          <S.StyledForm
            id="form-input-control-last-name"
            control={Input}
            name="user_name"
            placeholder={T.components.contact.formContent.name}
            required
          />
          <S.StyledForm
            id="form-input-control-email"
            control={Input}
            name="user_email"
            placeholder={T.components.contact.formContent.email}
            required
          />
        </S.Wrapper>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          name="user_message"
          placeholder={T.components.contact.formContent.message}
          required
        />
        <S.StyledButton type="submit" color="green">
          {T.components.contact.formContent.button}{" "}
          <S.Image src={Images.message} />
        </S.StyledButton>
      </Form>
    </S.FormContainer>
  );
};
