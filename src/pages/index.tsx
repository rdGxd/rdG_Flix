import { useState } from "react";
import { Button } from "../components/Button";
import { Error } from "../components/Error";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import { Success } from "../components/Success";
import { Data } from "../types/Data";

export const Home = () => {
  const [data, setData] = useState<Data>();

  return (
    <div className="flex flex-wrap justify-center sm:block">
      <Header />
      {data?.movie.id && (
        <Success
          title={data.movie.title}
          overview={data.movie.overview}
          src={data.movie.poster_path}
          results={data.trailer.results}
        />
      )}

      {data?.movie.status_message && <Error />}
      <Button setData={setData} />
      <Paragraph />
    </div>
  );
};
