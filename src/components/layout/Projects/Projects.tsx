import { projects } from "../../../constants/projects";
import { useTranslation } from "../../../hooks/useTranslations";
import * as S from "./Projects.styles";
import { ProjectsItem } from "./ProjectsItems/ProjectItem";

export const Projects = () => {
  const T = useTranslation();
  return (
    <S.ProjectsContainer>
      <S.TextContainer>
        <S.Header>{T.components.projects.header}</S.Header>
        <S.Text>{T.components.projects.text}</S.Text>
      </S.TextContainer>
      <S.Projects>
        {projects.map((item) => (
          <ProjectsItem {...item} key={item.name} />
        ))}
      </S.Projects>
    </S.ProjectsContainer>
  );
};
