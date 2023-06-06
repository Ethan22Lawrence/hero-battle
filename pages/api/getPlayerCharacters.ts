import type { NextApiRequest, NextApiResponse } from 'next'
import { CHARACTERS } from '../../data'
import { Character } from '../../types'

export default function async (request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { usedCharacters },
    method,
  } = request

  const battlingCharacters : Array<Character> = []

  while (battlingCharacters.length < 5) {
    const newChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    const duplicate = battlingCharacters.find(char => char.id === newChar.id)
    const used = usedCharacters?.includes(newChar.id.toString())
    if(!duplicate && !used) {
      battlingCharacters.push(newChar)
    }
  }
  
  
    return response.status(200).json(battlingCharacters);
}