import { useState } from "react";
import PostError from "../../assets/PosterError.svg";
import { IMG_URL } from "../../config";
import { DataType } from "../../types/Data";
import { DataTrailer } from "../../types/DataTrailer";
import { Button } from "../Button";
import { Header } from "../Header";
import { ImageMovie } from "../ImageMovie";
import { LinkTrailer } from "../LinkTrailer";
import { OverviewMovie } from "../Overview";
import { Paragraph } from "../Paragraph";
import { TitleMovie } from "../TitleMovie";

export const Content = () => {
  const [data, setData] = useState<DataType & DataTrailer>();

  return (
    <div className="flex flex-wrap justify-center sm:block">
      <Header />
      {data?.movie.id && (
        <>
          <ImageMovie
            alt={data.movie.title}
            src={`${IMG_URL}${data.movie.poster_path}`}
          />
          <TitleMovie title={data.movie.title} />
          <OverviewMovie overview={data.movie.overview} />
          {data.trailer.results.length > 0 && (
            <LinkTrailer link={data.trailer.results[0].key} />
          )}
        </>
      )}

      {/* Se Tiver ERROR */}
      {data?.movie.status_message && (
        <>
          <div className="flex justify-center sm:mr-16 md:mr-32 lg:mr-64 xl:mr-[400px] 2xl:mr-[500px] 3xl:mr-[700px]">
            <ImageMovie src={PostError} alt="error" />
          </div>
          <TitleMovie title="Ops, hoje não é dia de assistir filme. Bora codar! 🚀" />
        </>
      )}

      <Button setData={setData} />
      <Paragraph />
    </div>
  );
};
