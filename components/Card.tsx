'use client'
import { getPowerStatIcon } from "@/helpers"
import { setBattleCharacters } from "@/store/slices/charactersSlice"
import { Character } from "@/types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Card = (character: Character)  => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const playerTeam = useSelector((state: any ) => state?.characters?.battleCharacters)

    const handleClick = () => {
        let onTeam = playerTeam.find((char: Character) => char.id === character.id)
        if(playerTeam.length < 3 || onTeam) {
            setActive(!active)
            dispatch(setBattleCharacters(character))
        }
    }
    
    if(character.id === 0) {
        return (
            <div 
                className="text-white h-[250px] w-[150px] m-[5px] bg-cover bg-center rounded-md shadow-lg shadow-black border-white border-4 flex items-end" 
                style={{backgroundImage: `url(https://st2.depositphotos.com/5934840/10849/v/600/depositphotos_108498432-stock-illustration-superhero-design-superman-icon-costume.jpg})`}}
            >
            </div>
        )
    }

    return (
        <button 
            className={`text-white h-[250px] w-[150px] m-[5px] bg-cover rounded-md shadow-lg shadow-black ${active ? 'border-lime-500 -translate-y-7' : 'border-white'} border-4 flex items-end transition ease-in-out bg-blue-500 hover:border-lime-500`}
            style={{backgroundImage: `url(${character?.images?.sm})`}}
            onClick={handleClick}
        >
            <div className="bg-black/[.6] flex flex-col w-full">
                <div>
                    <div className="text-center">{character?.name}</div>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div>{getPowerStatIcon("intelligence")}{character?.powerstats?.intelligence}</div>
                    <div>{getPowerStatIcon("strength")}{character?.powerstats?.strength}</div>
                    <div>{getPowerStatIcon("speed")}{character?.powerstats?.speed}</div>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div>{getPowerStatIcon("durability")}{character?.powerstats?.durability}</div>
                    <div>{getPowerStatIcon("power")}{character?.powerstats?.power}</div>
                    <div>{getPowerStatIcon("combat")}{character?.powerstats?.combat}</div>
                </div>
            </div>
        </button>
    )
}

export default Card
