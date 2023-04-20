import Tmdb from "../api/Tmdb";

export const getTopRated = async () => {
  const response = await Tmdb.get("/movie/top_rated");
  const enMovies = response.data.results;

  // response.data.results.map((data) => {
  //   data.original_language === "en" ? enMovies.push(data) : null;
  // });

  // let onlyTitle = [];

  // enMovies.forEach((v) => {
  //   onlyTitle.push({
  //     title: v.title,
  //     id: v.id,
  //     poster_path: v.poster_path,
  //     backdrop_path: v.backdrop_path,
  //   });
  // });

  return enMovies;
};
