type ImageMovieProps = {
  src: string;
  alt: string;
};

export const ImageMovie = ({ alt, src }: ImageMovieProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="3xl:ml-[700px] p-2 sm:ml-16 md:ml-32 lg:ml-64 xl:ml-[400px] 2xl:ml-[500px]"
    />
  );
};
