import styled from "styled-components";

export const SkillContainer = styled.div`
  margin: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  width: 125px;
  height: 125px;
  font-size: 13px;
  transition: 0.3s all ease-out;
  :hover {
    background: rgba(196, 196, 196, 0.1);
  }
`;
