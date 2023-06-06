import { faBoltLightning, faBrain, faDumbbell, faHandFist, faPersonRunning, faWeightHanging } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Character } from "./types";

export const getPowerStatIcon = (type: string) => {
    switch(type) {
        case "intelligence":
            return <FontAwesomeIcon icon={faBrain} className="mr-[2px]" />
          break;
        case "strength":
            return <FontAwesomeIcon icon={faDumbbell} className="mr-[2px]" />
          break;
        case "speed":
            return <FontAwesomeIcon icon={faPersonRunning} className="mr-[2px]" />
          break;
        case "durability":
            return <FontAwesomeIcon icon={faWeightHanging} className="mr-[2px]" />
          break;
        case "power":
            return <FontAwesomeIcon icon={faBoltLightning} className="mr-[2px]" />
          break;
        case "combat":
            return <FontAwesomeIcon icon={faHandFist} className="mr-[2px]" />
          break;
      }
}

export const getPowerStatesTotal = (type: string, team: Character[]) => {
  switch(type) {
    case "intelligence":
        return team.reduce((a, b) => a + (b.powerstats?.intelligence || 0), 0);
      break;
    case "strength":
        return team.reduce((a, b) => a + (b.powerstats?.strength || 0), 0);
      break;
    case "speed":
        return team.reduce((a, b) => a + (b.powerstats?.speed || 0), 0);
      break;
    case "durability":
        return team.reduce((a, b) => a + (b.powerstats?.durability || 0), 0);
      break;
    case "power":
        return team.reduce((a, b) => a + (b.powerstats?.power || 0), 0);
      break;
    case "combat":
        return team.reduce((a, b) => a + (b.powerstats?.combat || 0), 0);
      break;
  }
}

export const runBattle = (types: string[], playerTeam: Character[], opponentTeam: Character[]) => {
  let playerTotal = 0
  let opponentTotal = 0

  for(let index in types) {
      const playerStat = getPowerStatesTotal(types[index], playerTeam)
      const opponentStat = getPowerStatesTotal(types[index], opponentTeam)

      if(playerStat) {
        playerTotal += playerStat
      }

      if(opponentStat) {
        opponentTotal += opponentStat
      }
  }

  const outcome: boolean = playerTotal > opponentTotal

  return outcome
}