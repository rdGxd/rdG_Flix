import { useState } from "react";
import { Button } from "../Button";
import { Error } from "../Error";
import { Header } from "../Header";
import { Paragraph } from "../Paragraph";
import { Success } from "../Success";
import { Data } from "../../types/Data";

export const Content = () => {
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
