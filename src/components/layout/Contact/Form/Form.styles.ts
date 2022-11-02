import styled from "styled-components";
import { Button, Form } from "semantic-ui-react";

export const FormContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.font};
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  max-width: 460px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledForm = styled(Form.Field)``;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px 15px;
  text-decoration: none;
`;

export const Image = styled.img`
  margin-left: 20px;
  height: 20px;
  width: 20px;
`;
