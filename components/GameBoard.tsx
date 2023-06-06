import OpponentPanel from "./OpponentPanel"
import PlayerPanel from "./PlayerPanel"

const GameBoard = () => {
    return (
        <div className="flex justify-center flex-col h-full grid grid-row-3 gap-4">
            <OpponentPanel/>
            <div className="my-[25px]"></div>
            <PlayerPanel />
        </div>
    )
}

export default GameBoard