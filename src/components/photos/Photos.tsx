import { Title } from "../ui/Title";
import { CustomLink } from "../ui/CustomLink";
import { PhotoContainer } from "../ui/layout/PhotoContainer";
import { usePhotos } from "./usePhotos";
import { Loading } from "../ui/Loading";

export const Photos = () => {
  const { data, status, error } = usePhotos();

  return (
    <>
      <Title title="Photos" />
      <CustomLink to="/" label="Home" />
      <Loading status={status} error={error} />
      <PhotoContainer>
        {data.map((i) => (
          <div key={i.id}>
            <img
              src={i.url}
              alt={i.title}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        ))}
      </PhotoContainer>
    </>
  );
};
