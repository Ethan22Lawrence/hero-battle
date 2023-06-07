import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
    reducerPath: "characterApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://hero-battle-git-main-ethan22lawrence.vercel.app/api"}),
    endpoints: (builder) => ({
        getAllCharacters: builder.query({
            query: page => ({url: "getAllCharacters", params: {page}}),
        }),
        getPlayerCharacters: builder.query<any,void>({
            query: usedCharacters => ({url: "getPlayerCharacters", params: {usedCharacters} }),
        }),
        getCharacter: builder.query({
            query: (name: String) => ({url: "getCharacter", params: {name} }),
        }),
    })
})

export const { useGetAllCharactersQuery, useGetPlayerCharactersQuery, useLazyGetPlayerCharactersQuery, useLazyGetCharacterQuery } = characterApi
