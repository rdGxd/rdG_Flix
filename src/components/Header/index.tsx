import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="">
      <img src={logo} alt="" className="mt-12 ml-32 mb-5" />
      <h1 className="text-3xl font-bold text-center ml-2">
        Não sabe o que assistir ?
      </h1>
    </div>
  );
};
