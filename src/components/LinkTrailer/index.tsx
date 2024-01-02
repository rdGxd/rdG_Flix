import youtubeIcon from "../../assets/youtube.svg";

type LinkTrailerProps = {
  link: string;
};

export const LinkTrailer = ({ link }: LinkTrailerProps) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${link}`}
      className="ml-10 mr-10 flex  justify-center"
      target="_blank"
      rel="noreferrer"
    >
      <img src={youtubeIcon} alt="Link Trailer" className="w-20" />
    </a>
  );
};
