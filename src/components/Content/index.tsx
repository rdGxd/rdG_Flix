import { getData } from "../../api/getData";
import { DataType } from "../../types/Data";

export const Content = () => {
  const handleGetMovie = async () => {
    const data: DataType = await getData();

    if (!data.id) {
      console.log(data.status_message);
    }
  };

  return (
    <>
      <h1 onClick={handleGetMovie}>Oi</h1>
    </>
  );
};
