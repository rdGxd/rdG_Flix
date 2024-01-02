import PostError from "../../assets/PosterError.svg";
import { ImageMovie } from "../ImageMovie";
import { TitleMovie } from "../TitleMovie";

export const Error = () => {
  return (
    <>
      <div className="flex justify-center sm:mr-16 md:mr-32 lg:mr-64 xl:mr-[400px] 2xl:mr-[500px] 3xl:mr-[700px]">
        <ImageMovie src={PostError} alt="error" />
      </div>
      <TitleMovie title="Ops, hoje não é dia de assistir filme. Bora codar! 🚀" />
    </>
  );
};
