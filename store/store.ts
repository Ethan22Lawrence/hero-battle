import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/charactersSlice";
import game from "./slices/gameSlice";
import { characterApi } from "@/characterApiService";

const store = configureStore({
    reducer: {
        characters,
        game,
        [characterApi.reducerPath] : characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware)
  })
  
  export default store