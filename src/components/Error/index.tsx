import PostError from "../../assets/PosterError.svg";
import { ImageMovie } from "../ImageMovie";
import { TitleMovie } from "../TitleMovie";

export const PageError = () => {
  return (
    <>
      <div className="flex justify-center">
        <ImageMovie src={PostError} alt="error" />
      </div>
      <TitleMovie title="Ops, hoje não é dia de assistir filme. Bora codar! 🚀" />
    </>
  );
};
