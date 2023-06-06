'use client'
import { useDispatch, useSelector } from "react-redux"
import {setBattleCharacters, setOpponentCharacters, getPlayerCharacters} from '../store/slices/charactersSlice'
import { setBattleType, setGameStage } from "@/store/slices/gameSlice"
import { useGetPlayerCharactersQuery, useLazyGetPlayerCharactersQuery } from "@/characterApiService"
import { useEffect, useState } from "react"
import { Character } from "@/types"

const PlayButton = () => {
    const dispatch = useDispatch()
    const usedCharacters = useSelector((state: any ) => state.characters?.usedCharacters)
    const gameStage = useSelector((state: any ) => state.game?.gameStage)

    const {data: charOnRender} = useGetPlayerCharactersQuery(usedCharacters)
    const [ trigger, { data: charOnPlay } ] = useLazyGetPlayerCharactersQuery(usedCharacters)
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
      if(typeof charOnRender !== 'undefined') {
        setCharacters(charOnRender)
      }
    }, [charOnRender])

    useEffect(() => {
      if(typeof charOnPlay !== 'undefined') {
        setCharacters(charOnPlay)
      }
    }, [charOnPlay])

    const handleClick = () => {
      trigger()
      dispatch(setBattleType())
      dispatch(setOpponentCharacters())
      dispatch(setGameStage({ start: false, battle: true, end: false}))
      dispatch(setBattleCharacters([]))
      dispatch(getPlayerCharacters(characters))
    }

    return (
        <button 
            onClick={handleClick}
            className="rounded-full bg-highlight ph-[10px] text-white w-[150px]"
          >
            {gameStage.start ? 'Play Game' : 'Play Again'}
          </button>
    )
}

export default PlayButton