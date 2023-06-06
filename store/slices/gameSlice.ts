import { battleTypes } from "@/data";
import { Score, GameStage } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
    gameStage: GameStage
    setBattle: Boolean
    gameRounds: number
    battleType: string[]
    score: Score
}

const initialState: GameState = {
    setBattle: false,
    gameRounds: 3,
    battleType: [],
    score: {
        wins: 0,
        loss: 0
    },
    gameStage: {
        start: true,
        battle: false,
        end: false,
    }
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameStage: (state, action) => {
        state.gameStage = action.payload
    },
    setGameRounds: (state, action) => {
        state.gameRounds = action.payload
    },
    setBattleType: (state) => {
        const num = 3
        const shuffled = [...battleTypes].sort(() => 0.5 - Math.random()).slice(0, num)
        state.battleType = [...shuffled]
    },
    setScore: (state, action) => {
        action.payload ? state.score.wins += 1 : state.score.loss += 1
    }
  }
});

export const { setGameRounds, setBattleType, setScore, setGameStage } = gameSlice.actions;

export default gameSlice.reducer;