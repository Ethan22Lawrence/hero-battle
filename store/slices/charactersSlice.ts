import { CHARACTERS } from "@/data";
import { Character } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CharacterState {
    playerCharacters: Array<Character>
    opponentCharacters: Array<Character>
    battleCharacters: Array<Character>
    usedCharacters: Array<number>
}

const initialState: CharacterState = {
    playerCharacters: [],
    opponentCharacters: [],
    battleCharacters: [],
    usedCharacters: []
}

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getPlayerCharacters: (state, action) => {
      state.playerCharacters = [...action.payload]

      const charIds = action.payload.map(function (elem: Character) {
        return elem.id; 
      })

      state.usedCharacters = [...state.usedCharacters, ...charIds]
    },
    setBattleCharacters: (state, action) => {
      if(action.payload.length === 0) {
        state.battleCharacters = action.payload
      } else {
        let obj = state.battleCharacters.find(char => char.id === action.payload.id)
        if(!obj) {
          state.battleCharacters = [...state.battleCharacters, action.payload]
        } else {
          const newState = state.battleCharacters.filter(function(e) { return e.id !== action.payload.id })
          state.battleCharacters = [...newState]
        }
      }
    },
    setOpponentCharacters: (state) => {
      const num = 3
      const shuffled = [...CHARACTERS].sort(() => 0.5 - Math.random()).slice(0, num)
      state.opponentCharacters = [...shuffled]

      const charIds = shuffled.map(function (elem) {
        return elem.id;
      })
      state.usedCharacters = [...state.usedCharacters, ...charIds]
    },
  },
});

export const { getPlayerCharacters, setBattleCharacters, setOpponentCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;