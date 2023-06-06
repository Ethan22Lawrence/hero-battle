'use client'
import { runBattle } from "@/helpers"
import { setGameStage, setScore } from "@/store/slices/gameSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PlayButton from "./PlayButton"

const BattlePanel = () => {
    const playerTeam = useSelector((state: any ) => state?.characters?.battleCharacters)
    const opponentTeam = useSelector((state: any ) => state?.characters?.opponentCharacters)
    const battleTypes = useSelector((state: any ) => state.game?.battleType)
    const gameStage = useSelector((state: any ) => state.game?.gameStage)
    const dispatch = useDispatch()

    const [win, setWin] = useState(false)
    
    if(gameStage.battle) {
        return (
            <div className="flex flex-col items-center">
                {
                    playerTeam.length < 3 ?
                    <div className="text-highlight text-xl px-[20px] text-center">Choose your team</div> :
                    <button 
                    onClick={() => {
                        const outcome = runBattle(battleTypes, playerTeam, opponentTeam)
                        setWin(outcome)
                        dispatch(setScore(outcome))
                        dispatch(setGameStage({ start: false, battle: false, end: true}))
                    }}
                    className="rounded-full bg-highlight w-[150px] ph-[15px] text-white"
                    >
                        BATTLE READY 
                    </button>
                }
            </div>
        )
    }else if(gameStage.end) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-highlight text-2xl px-[20px] text-center mb-[20px]">{win ? 'You Win!' : 'You Lose!'}</div>
                <PlayButton />
            </div>
        )
    } else {
        return null
    }
}

export default BattlePanel