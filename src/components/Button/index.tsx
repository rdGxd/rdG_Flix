import { SetStateAction } from "react";
import { getData } from "../../api/getData";
import btnImg from "../../assets/btnImg.svg";
import { Data } from "../../types/Data";
import { DataMovie } from "../../types/DataMovie";
import { DataTrailer } from "../../types/DataTrailer";

type ButtonProps = {
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
};

type getMovieProps =
  | {
      movie: SetStateAction<DataMovie | undefined>;
      trailer: SetStateAction<DataTrailer | undefined>;
    }
  | undefined;

export const Button = ({ setData }: ButtonProps) => {
  const handleGetMovie = async () => {
    const getMovie: getMovieProps = await getData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return setData(getMovie as any);
  };

  return (
    <button
      type="button"
      onClick={handleGetMovie}
      className="my-7 flex rounded bg-bgButton p-2 font-bold text-black sm:ml-56  md:ml-72 lg:ml-[430px] xl:ml-[630px] 2xl:ml-[675px] 3xl:ml-[850px]"
    >
      <img src={btnImg} alt="" className="mr-4 " />
      Encontrar filme
    </button>
  );
};
