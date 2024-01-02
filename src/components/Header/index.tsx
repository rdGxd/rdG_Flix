import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="">
      <img
        src={logo}
        alt=""
        className="3xl:ml-[900px] mb-5 ml-32 mt-12 sm:ml-72 md:ml-[350px] lg:ml-[470px] xl:ml-[600px] 2xl:ml-[730px]"
      />
      <h1 className="mb-7 ml-2 text-center text-3xl font-bold GalaxyS8:text-2xl">
        Não sabe o que assistir ?
      </h1>
    </div>
  );
};
