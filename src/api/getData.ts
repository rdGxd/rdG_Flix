import { BASE_URL } from "../config/index";
import { DataMovie } from "../types/DataMovie";
import { DataTrailer } from "../types/DataTrailer";
import { options } from "./optionsFetch";
import { totalResults } from "./totalResults";

export const getData = async () => {
  const numberMovie = await totalResults();
  const url = `${BASE_URL}${numberMovie}`;
  const urlTrailer = `https://api.themoviedb.org/3/movie/${numberMovie}/videos`;

  try {
    const response = await fetch(url, options);
    const trailer = await fetch(urlTrailer, options);
    const data: DataMovie = await response.json();
    const dataTrailer: DataTrailer = await trailer.json();
    return {
      movie: data,
      trailer: dataTrailer,
    };
  } catch (error) {
    //
  }
};
