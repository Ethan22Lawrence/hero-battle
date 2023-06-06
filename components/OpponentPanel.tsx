import { useSelector } from "react-redux"
import Card from "./Card"

const OpponentPanel = () => {
    const characters = useSelector((state: any ) => state?.characters?.opponentCharacters)
    const gameStage = useSelector((state: any ) => state.game?.gameStage)

    const characterCount = 5

    const GenericCard = () => {
        return (
            <button 
                className={`text-white h-[250px] w-[150px] m-[5px] bg-cover rounded-md shadow-lg shadow-black bg-center border-white border-4 flex items-end transition ease-in-out bg-blue-500`}
                style={{backgroundImage: `url(https://st2.depositphotos.com/5934840/10849/v/600/depositphotos_108498432-stock-illustration-superhero-design-superman-icon-costume.jpg})`}}
            >
            </button>
        )
    }

    const getOpponentCards = () => {
        let opponentCards = []

        for(let i = 0; i < characterCount; i++) {
            opponentCards.push(<GenericCard key={Math.random()}/>)
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