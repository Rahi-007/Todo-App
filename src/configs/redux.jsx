import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//R--------{Define base URL and expected endpoints}----------R//
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getAllTasks: build.query({
      query: () => `task`,
    }),
    getTasks: build.query({
      query: (name) => `task/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
