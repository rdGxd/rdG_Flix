import { getData } from "../../api/getData";
import btnImg from "../../assets/btnImg.svg";
import { DataType } from "../../types/Data";

type ButtonProps = {
  setData: React.Dispatch<React.SetStateAction<DataType | undefined>>;
};

export const Button = ({ setData }: ButtonProps) => {
  const handleGetMovie = async () => {
    const getMovie: DataType = await getData();
    return setData(getMovie);
  };

  return (
    <button
      type="button"
      onClick={handleGetMovie}
      className="my-7 ml-16 flex rounded bg-bgButton p-2 font-bold text-black"
    >
      <img src={btnImg} alt="" className="mr-4 " />
      Encontrar filme
    </button>
  );
};
