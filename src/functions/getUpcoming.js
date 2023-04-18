import Tmdb from "../api/Tmdb";

export const getUpcoming = async () => {
  const response = await Tmdb.get("/movie/upcoming");

  const filtered = [];
  response.data.results.map((item) => {
    filtered.push({
      poster_path: item.poster_path,
      title: item.title,
      id: item.id,
      backdrop_path: item.backdrop_path,
    });
  });

  return filtered;
};
