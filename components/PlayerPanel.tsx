import { Character } from "@/types"
import Card from "./Card"
import { useSelector } from "react-redux"

const PlayerPanel = () => {
    const characters = useSelector((state: any ) => state?.characters?.playerCharacters)

    if(characters.length === 0) {
        const characterCount = 5
        let opponentCards = []

        for(let i = 0; i < characterCount; i++) {
            opponentCards.push(<Card key={Math.random()} id={0}/>)
        }
        return (
            <div className="flex flex-row justify-between">
                {opponentCards}
            </div>
        )
    } else {
        return(
            <div className="flex flex-row justify-between">
                {
                    characters.length > 0 && characters.map((character : Character) => {
                        return (
                            <Card key={Math.random()} {...character}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default PlayerPanel