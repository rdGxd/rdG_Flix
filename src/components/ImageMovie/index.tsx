type ImageMovieProps = {
  src: string;
  alt: string;
};

export const ImageMovie = ({ alt, src }: ImageMovieProps) => {
  return <img src={src} alt={alt} className="p-2" />;
};
