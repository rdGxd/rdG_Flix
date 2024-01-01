import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="">
      <img src={logo} alt="" className="mb-5 ml-32 mt-12" />
      <h1 className="mb-7 ml-2 text-center text-3xl font-bold">
        Não sabe o que assistir ?
      </h1>
    </div>
  );
};
