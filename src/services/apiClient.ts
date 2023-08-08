import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a451f203ca564e8a8d51271666838012",
  },
});
