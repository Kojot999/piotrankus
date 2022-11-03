import * as S from "./Download.styles";

export const Download: React.FC<{ file: any; text: string; img: any }> = ({
  file,
  text,
  img,
}) => {
  return (
    <S.Download key={file} href={file} download>
      {text}
      <S.Image src={img} />
    </S.Download>
  );
};
