type OverviewProps = {
  overview: string;
};

export const OverviewMovie = ({ overview }: OverviewProps) => {
  return <p className="xp-2 text-center 2xl:w-full ">{overview}</p>;
};
