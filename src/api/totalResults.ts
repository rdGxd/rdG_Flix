import { options } from "./optionsFetch";

export const totalResults = async () => {
  const takeNumberMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false`;

  try {
    const data = await fetch(takeNumberMovies, options);
    const response = await data.json();
    const result = Math.floor(Math.random() * response.total_results);
    return result;
  } catch (error) {
    //
  }
};
