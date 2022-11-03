import styled from "styled-components";

export const SkillContainer = styled.div`
  margin: 10px;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  width: 100px;
  font-size: 13px;
  :hover {
    background: rgba(196, 196, 196, 0.1);
  }
`;
