import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGVmZTg0ZWRlOTBlOTIyZjY5YjYzNTBkYzhiNTEzOCIsInN1YiI6IjY0MjgwNzc2OTYwY2RlMDEyNjM0NjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kgOkEYLqojWisAIMdMqpv3gbrxhZKd37-SBSDk2G8t4",
  },
});
