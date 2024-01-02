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
      {data?.movie.id && <Success data={data} />}
      {data?.movie.status_message && <Error />}
      <Button setData={setData} />
      <Paragraph />
    </div>
  );
};
