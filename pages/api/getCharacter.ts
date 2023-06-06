import type { NextApiRequest, NextApiResponse } from 'next'
import { CHARACTERS } from '../../data'
import { Character } from '../../types'

export default function async (request: NextApiRequest, response: NextApiResponse) {    
    const {
      query: { name },
      method,
    } = request

    const character : any = CHARACTERS.filter(o => o.name.toLowerCase() === name)

    console.log(character)
    return response.status(200).json(character);
  };

