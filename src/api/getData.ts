import { API_KEY, BASE_URL } from "../config/index";

export const getData = async () => {
  const randomNumber = () => Math.floor(Math.random() * 780498);
  const url = `${BASE_URL}${randomNumber()}${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("DEU RUIM", error);
  }
};
