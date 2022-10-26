import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
`;
export const EmesTransContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;
