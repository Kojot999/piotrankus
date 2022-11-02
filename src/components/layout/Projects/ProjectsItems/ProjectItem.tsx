import { FC } from "react";
import { Projects } from "../../../../types/index";
import * as S from "./ProjectsItem.style";

export const ProjectsItem: FC<Projects> = ({
  name,
  logo,
  description,
  technologies,
  links,
}) => {
  return (
    <S.ProjectContainer>
      <S.Header>{name}</S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Text>{description}</S.Text>
          <S.Technologies>{technologies.react}</S.Technologies>
        </S.Wrapper>
        <img src={logo} alt={`${name} logo`} width="50px" height="50px" />
      </S.Container>
      <S.Container>
        <S.Link href={links.git} target={"_blank"}>
          <S.Img src={links.gitlogo} />
          Git
        </S.Link>
        <S.Link href={links.website} target={"_blank"}>
          <S.Img src={links.weblogo} />
          Web
        </S.Link>
      </S.Container>
    </S.ProjectContainer>
  );
};
