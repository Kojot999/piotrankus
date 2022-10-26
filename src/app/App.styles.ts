import styled from "styled-components";
import { Images } from "../assets/index";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Images.backGround});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
