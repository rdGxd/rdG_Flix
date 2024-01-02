import youtubeIcon from "../../assets/youtube.svg";

type LinkTrailerProps = {
  keyVideo: string;
};

export const LinkTrailer = ({ keyVideo }: LinkTrailerProps) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${keyVideo}`}
      className="ml-10 mr-10 flex  justify-center"
      target="_blank"
      rel="noreferrer"
    >
      <img src={youtubeIcon} alt="Link Trailer" className="w-20" />
    </a>
  );
};
