import type { NextApiRequest, NextApiResponse } from 'next'
import { CHARACTERS } from '../../data'
import { Character } from '../../types'

export default function async (request: NextApiRequest, response: NextApiResponse) {    
    const {
      query: { page },
      method,
    } = request

    const num1: number = (Number(page) - 1) * 50
    const num2: number = Number(page) * 50 - 1

    const charactersArray : Array<Character> = CHARACTERS.slice(num1, num2)
    
    return response.status(200).json(charactersArray);
  };


