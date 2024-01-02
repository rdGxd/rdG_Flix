import { IMG_URL } from "../../config";
import { Data } from "../../types/Data";
import { ImageMovie } from "../ImageMovie";
import { LinkTrailer } from "../LinkTrailer";
import { OverviewMovie } from "../Overview";
import { TitleMovie } from "../TitleMovie";

type SuccessProps = {
  data: Data;
};

export const Success = ({ data }: SuccessProps) => {
  return (
    <>
      <ImageMovie
        alt={data.movie.title}
        src={`${IMG_URL}${data.movie.poster_path}`}
      />
      <TitleMovie title={data.movie.title} />
      <OverviewMovie overview={data.movie.overview} />

      {/* Verificando se tem trailer  */}
      {data.trailer.results.length > 0 && (
        <LinkTrailer link={data.trailer.results[0].key} />
      )}
    </>
  );
};
