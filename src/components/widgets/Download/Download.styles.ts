import styled from "styled-components";

export const Download = styled.a`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  text-decoration: none;
  width: 200px;
  height: 40px;
  padding-inline: 20px;
  filter: drop-shadow(0px 10px 30px rgba(18, 198, 255, 0.25));
  cursor: pointer;
  :hover {
    box-shadow: 0px 2px 10px #12c6ff;
  }
`;

export const Image = styled.img`
  margin-left: 20px;
  height: 20px;
  width: 20px;
`;
