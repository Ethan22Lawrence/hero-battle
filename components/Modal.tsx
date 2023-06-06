import { getPowerStatIcon } from "@/helpers";
import { Character } from "@/types";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'

interface Props {
    character: Character
    onClick: any
}

const Modal = ({character, onClick} : Props) => {

    const renderInfo = (label: String, data: string | null | undefined) => {
        if(data) {
            return (
                <div className="flex flex-col p-[10px]">
                    <span className="text-xs">{label}:</span>
                    <div className="text-base">{data}</div>
                </div>
            )
        }
    }

    return (
        <div className="fixed top-[50px] bg-black/[.05] h-screen w-screen flex ">
            <div className="modal-content mx-auto w-4/6 bg-secondary m-[50px] p-[20px] rounded-md flex flex-col text-white drop-shadow-xl">
                <button className="text-xl fixed top-[10px] right-[10px] z-10" onClick={onClick}><FontAwesomeIcon icon={faCircleXmark} /></button>
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-3">
                        <div className="bg-cover bg-center rounded-md border border-2 border-white" style={{backgroundImage: `url(${character?.images?.sm})`}}></div>
                        <div className="col-span-2">
                            <div className=" text-3xl text-white p-[10px] w-full bg-highlight mb-[10px] ml-[8px] -skew-x-12 rounded-md">{character.name}</div>
                            <div className="modal-section flex flex-row justify-between flex-wrap">
                                {renderInfo('full name', character.biography?.fullName)}
                                {renderInfo('gender', character.appearance?.gender)}
                                {renderInfo('race', character.appearance?.race)}
                                {renderInfo('height', character?.appearance?.height ? character.appearance.height[0] : null)}
                                {renderInfo('weight', character?.appearance?.weight ? character.appearance.weight[0] : null)}
                            </div>
                            <div className="modal-section flex flex-col">
                                {renderInfo('birth place', character.biography?.placeOfBirth)}
                                {renderInfo('alter egos', character.biography?.alterEgos)}
                                <div className="flex flex-col p-[10px]">
                                    <span className="text-xs">aliases:</span>
                                    <div className="flex flex-row flex-wrap">
                                        {
                                            character.biography?.aliases instanceof Array ? character.biography?.aliases?.map((alias: string, index: number) => {
                                                return (
                                                    <div className="mr-[5px]" key={Math.random()}>{alias} {character.biography?.aliases?.length !== index + 1 ? ',' : null } </div>
                                                )
                                            }) : ""
                                        }
                                    </div>
                                </div>
                                {renderInfo('first appearance', character.biography?.firstAppearance)}
                                {renderInfo('publisher', character.biography?.publisher)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col p-[10px]">
                            <span className="text-xs">power stats:</span>
                            <div className="flex flex-row justify-between">
                                <div className="mr-[5px]">{getPowerStatIcon("intelligence")} intelligence {character?.powerstats?.intelligence}</div>
                                <div>{getPowerStatIcon("strength")} strength {character?.powerstats?.strength}</div>
                                <div>{getPowerStatIcon("speed")} speed {character?.powerstats?.speed}</div>
                                <div>{getPowerStatIcon("durability")} durability {character?.powerstats?.durability}</div>
                                <div>{getPowerStatIcon("power")} power {character?.powerstats?.power}</div>
                                <div>{getPowerStatIcon("combat")} combat {character?.powerstats?.combat}</div>
                            </div>
                        </div>
                        {renderInfo('affiliation', character.connections?.groupAffiliation)}
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Modal

