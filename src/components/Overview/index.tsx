type OverviewProps = {
  overview: string;
};

export const OverviewMovie = ({ overview }: OverviewProps) => {
  return (
    <p className="p-2 text-center  2xl:ml-[400px] 2xl:w-1/2 3xl:ml-[500px] ">
      {overview}
    </p>
  );
};
