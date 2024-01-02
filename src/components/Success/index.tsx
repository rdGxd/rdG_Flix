import { IMG_URL } from "../../config";
import { Result } from "../../types/DataTrailer";
import { ImageMovie } from "../ImageMovie";
import { LinkTrailer } from "../LinkTrailer";
import { OverviewMovie } from "../Overview";
import { TitleMovie } from "../TitleMovie";

type SuccessProps = {
  title: string;
  src: string;
  overview: string;
  results: Result[];
};

export const Success = ({ title, src, overview, results }: SuccessProps) => {
  return (
    <>
      <ImageMovie src={`${IMG_URL}${src}`} alt={title} />
      <TitleMovie title={title} />
      <OverviewMovie overview={overview} />

      {/* Verificando se tem trailer  */}
      {results.length > 0 && <LinkTrailer keyVideo={results[0].key} />}
    </>
  );
};
