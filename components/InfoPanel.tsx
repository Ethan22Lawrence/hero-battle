import { useSelector } from "react-redux"
import PlayButton from "./PlayButton"
import TeamStats from "./TeamStats"
import { Character } from "@/types"
import BattlePanel from "./BattlePanel"

const InfoPanel = () => {
    const battleTypes = useSelector((state: any ) => state.game?.battleType)
    const gameStage = useSelector((state: any ) => state.game?.gameStage)

    const battleStart = () => {
        return (
            <div className="flex flex-col justify-center bg-secondary h-full rounded-md p-[20px]">
                <div className="flex flex-col text-white text-center">
                   <h1 className="text-xl text-highlight font-bold mb-[10px]">How to Play</h1>
                   <div className="mb-[15px]">Prepare for an exhilarating challenge!</div>
                   <div className="mb-[15px]">Three power statistics will be selected at random, which will determine the attributes your team will face in battle.</div>
                   <div className="mb-[15px]">Strategize and assemble the ultimate trio to outmatch your opponents.</div>
                   <div className="mb-[15px]">Click the Battle Ready button to unleash their collective might.</div>
                </div>
                <div className="flex justify-center">
                    <PlayButton/>
                </div>
            </div>
        )
    }

    const battle = () => {
        return (
                <div className="flex flex-col justify-between bg-secondary h-full rounded-md p-[20px]">
                    <div className="mb-[50px]">
                        <div className="text-highlight text-center mb-[10px] text-lg">Opponent Team</div>
                        <div className="flex justify-center">
                            {
                                battleTypes?.map((battle: string) => {
                                    return (
                                        <TeamStats key={battle} battle={battle} isPlayer={false} gameStage={gameStage}/>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    <BattlePanel />
                    <div>
                        <div className="text-highlight text-center mb-[10px] text-lg">Your Team</div>
                        <div className="flex justify-center">
                            {
                                battleTypes?.map((battle: string) => {
                                    return (
                                        <TeamStats key={battle} battle={battle} isPlayer={true} gameStage={gameStage}/>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <div className="bg-secondary h-full rounded-md p-[20px]">
            {gameStage.start ? battleStart() : battle()}
        </div>
    )

}

export default InfoPanel