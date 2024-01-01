type OverviewProps = {
  overview: string;
};

export const OverviewMovie = ({ overview }: OverviewProps) => {
  return <p className="p-2 text-center">{overview}</p>;
};
