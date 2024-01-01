type TitleMovie = {
  title: string;
};

export const TitleMovie = ({ title }: TitleMovie) => {
  return (
    <h2 className="my-5 text-center text-xl font-bold text-subtitle">
      {title}
    </h2>
  );
};
