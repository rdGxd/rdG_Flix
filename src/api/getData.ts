import { API_KEY, BASE_URL } from "../config/index";
import { DataType } from "../types/Data";
import { DataTrailer } from "../types/DataTrailer";

const randomNumber = () => Math.floor(Math.random() * 780498);

export const getData = async () => {
  const numberMovie = randomNumber();
  const url = `${BASE_URL}${numberMovie}${API_KEY}`;
  const urlTrailer = `https://api.themoviedb.org/3/movie/${numberMovie}/videos`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(url);
    const trailer = await fetch(urlTrailer, options);
    const data: DataType = await response.json();
    const dataTrailer: DataTrailer = await trailer.json();
    return {
      movie: data,
      trailer: dataTrailer,
    };
  } catch (error) {
    console.error("DEU RUIM", error);
  }
};
