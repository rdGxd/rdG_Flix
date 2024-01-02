import { useState } from "react";
import PostError from "../../assets/PosterError.svg";
import { IMG_URL } from "../../config";
import { DataType } from "../../types/Data";
import { Button } from "../Button";
import { Header } from "../Header";
import { ImageMovie } from "../ImageMovie";
import { OverviewMovie } from "../Overview";
import { Paragraph } from "../Paragraph";
import { TitleMovie } from "../TitleMovie";

export const Content = () => {
  const [data, setData] = useState<DataType>();

  return (
    <div className="flex flex-wrap justify-center sm:block">
      <Header />
      {data?.id && (
        <>
          <ImageMovie alt={data.title} src={`${IMG_URL}${data.poster_path}`} />
          <TitleMovie title={data.title} />
          <OverviewMovie overview={data.overview} />
        </>
      )}

      {/* Se Tiver ERROR */}
      {data?.status_code && (
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
