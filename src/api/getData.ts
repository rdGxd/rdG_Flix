import { BASE_URL } from "../config/index";
import { DataType } from "../types/Data";
import { DataTrailer } from "../types/DataTrailer";
import { totalResults } from "./totalResults";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${import.meta.env.VITE_API_KEY}`,
  },
};

export const getData = async () => {
  const numberMovie = await totalResults();
  const url = `${BASE_URL}${numberMovie}`;
  const urlTrailer = `https://api.themoviedb.org/3/movie/${numberMovie}/videos`;

  try {
    const response = await fetch(url, options);
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
