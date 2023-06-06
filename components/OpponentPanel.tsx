import { useSelector } from "react-redux"
import Card from "./Card"

const OpponentPanel = () => {
    const characters = useSelector((state: any ) => state?.characters?.opponentCharacters)
    const gameStage = useSelector((state: any ) => state.game?.gameStage)

    const characterCount = 5

    const powerStats = {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
      }

    const getOpponentCards = () => {
        let opponentCards = []

        for(let i = 0; i < characterCount; i++) {
            opponentCards.push(<Card key={Math.random()} id={0} powerstats={powerStats}/>)
        }

        if(gameStage.end) {
            opponentCards = opponentCards.slice(3)
            for(let i = 0; i < characters.length; i++) {
                opponentCards.push(<Card key={Math.random()} {...characters[i]}/>)
            }
            opponentCards = opponentCards.sort((a, b) => 0.5 - Math.random());
        }
        return opponentCards
    }

    return (
        <div className="flex flex-row justify-between">
            {getOpponentCards()}
        </div>
    )
}

export default OpponentPanel