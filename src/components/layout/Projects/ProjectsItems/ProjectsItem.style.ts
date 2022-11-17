import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #0096c6 -76.06%, #000960 177.92%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0px 25px 20px 25px;
`;

export const Header = styled.h1`
  background: linear-gradient(358.97deg, #006383 -76.06%, #031cff 177.92%);
  margin: 0;
  padding: 0;
  border-radius: 10px;
  position: relative;
  bottom: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 5px 15px;
  width: fit-content;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 390px) {
    gap: 5px;
  }
`;

export const Wrapper = styled.div``;

export const Text = styled.p`
  font-size: 14px;
  max-width: 250px;
  margin: 0;
`;

export const Technologies = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.colors.font};
`;

export const LinkWeb = styled.a`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.colors.font};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 5px 10px;
`;

export const Img = styled.img`
  margin-right: 5px;
  width: 20px;
`;
