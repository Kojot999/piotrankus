import * as S from "./Skills.styles";
import { skills } from "../../../constants/skills";
import { SkillsItem } from "./SkillsItem/SkillsItem";
import { useTranslation } from "../../../hooks/useTranslations";

export const Skills = () => {
  const T = useTranslation();
  return (
    <S.SkillsContainer>
      <S.TextContainer>
        <S.Header>{T.components.skills.header}</S.Header>
        <S.Text>{T.components.skills.text}</S.Text>
      </S.TextContainer>
      <S.Skills>
        {skills.map((item) => (
          <SkillsItem {...item} key={item.name} />
        ))}
      </S.Skills>
    </S.SkillsContainer>
  );
};
