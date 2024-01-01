import { useState } from "react";
import { IMG_URL } from "../../config";
import { DataType } from "../../types/Data";
import { Button } from "../Button";
import { PageError } from "../Error";
import { ImageMovie } from "../ImageMovie";
import { OverviewMovie } from "../Overview";
import { Paragraph } from "../Paragraph";
import { TitleMovie } from "../TitleMovie";

export const Content = () => {
  const [data, setData] = useState<DataType>();

  return (
    <>
      {data?.id && (
        <>
          <ImageMovie alt={data.title} src={`${IMG_URL}${data.poster_path}`} />
          <TitleMovie title={data.title} />
          <OverviewMovie overview={data.overview} />
        </>
      )}

      {data?.status_code && <PageError />}
      <Button setData={setData} />
      <Paragraph />
    </>
  );
};
