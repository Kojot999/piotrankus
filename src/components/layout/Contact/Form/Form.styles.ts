import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.font};
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  max-width: 460px;
`;

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    align-items: center;
  }
`;

export const StyledImput = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  text-decoration-line: underline;
  text-decoration-style: "solid";
  text-decoration-color: #12c6ff;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px 15px;
  text-decoration: none;
  max-width: 220px;
  margin: 15px;
  cursor: pointer;
`;

export const Image = styled.img`
  margin-left: 30px;
  height: 20px;
  width: 20px;
`;
