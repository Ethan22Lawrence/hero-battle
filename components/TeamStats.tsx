import { getPowerStatIcon, getPowerStatesTotal } from "@/helpers"
import { GameStage } from "@/types"
import { useSelector } from "react-redux"

interface Props {
    battle: any
    isPlayer: boolean
    gameStage: GameStage
}

const TeamStats: React.FC<Props> = ({battle, isPlayer, gameStage}) => {
    const playerTeam = useSelector((state: any ) => state?.characters?.battleCharacters)
    const opponentTeam = useSelector((state: any ) => state?.characters?.opponentCharacters)

    if(isPlayer) {
        return (
            <div>
                <div className="mx-[10px] text-white text-center">{getPowerStatIcon(`${battle}`)} {battle}</div>
                <div className="text-center text-white">{getPowerStatesTotal(battle, playerTeam )}</div>
            </div>
        )
    } else {
        if(gameStage.end) {
            return (
                <div>
                    <div className="mx-[10px] text-white text-center">{getPowerStatIcon(`${battle}`)} {battle}</div>
                    <div className="text-center text-white">{getPowerStatesTotal(battle, opponentTeam)}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="mx-[10px] text-white text-center">{getPowerStatIcon(`${battle}`)} {battle}</div>
                    <div className="text-center text-white">?</div>
                </div>
            )
        }
    }
}

export default TeamStats