import { useLanguageContext } from "../../../context/useLanguageContext";
import { useProjectsDef } from "../../../hooks/useProjectsDef";
import * as S from "./Projects.styles";
import { ProjectsItem } from "./ProjectsItems/ProjectItem";

export const Projects = () => {
  const T = useLanguageContext();
  const { projects } = useProjectsDef();
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
