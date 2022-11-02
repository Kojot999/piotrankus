import React from "react";
import { FC } from "react";
import { Skills } from "../../../../types/index";
import * as S from "./SkillsItem.styles";

export const SkillsItem: FC<Skills> = ({ name, logo }) => {
  return (
    <S.SkillContainer>
      <img src={logo} alt={`${name} logo`} width="50px" height="50px" />
      <p>{name}</p>
    </S.SkillContainer>
  );
};
