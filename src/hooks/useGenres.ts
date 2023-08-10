import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;

// import genres from "../data/genres";
// ({ data: genres, isLoading: false, error: null }); marka shipinkinka la sameynayo
