import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6294692563b5d108c18adceb.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `Contacts`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: `Contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),

    removeContact: builder.mutation({
      query: contactId => ({
        url: `Contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactApi;
