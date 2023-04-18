import Tmdb from "../api/Tmdb";

export const getDetails = async (id) => {
  const response = await Tmdb.get(`/movie/${id}`);

  const arr = [];
  arr.push(response);
  return arr;
};
