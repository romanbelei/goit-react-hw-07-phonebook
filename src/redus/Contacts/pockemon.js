// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6294692563b5d108c18adceb.mockapi.io/api/v1/',
    // baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: () => `Contacts`,
      //   query: name => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
