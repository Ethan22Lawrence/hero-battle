export interface Character {
  id: number
  name?: string | null
  slug?: string | null
  powerstats?: PowerStats
  appearance?: Appearance | null
  biography?: Biography | null
  work?: Work | null
  connections?: Connections | null
  images?: Images | null
}

interface PowerStats {
  intelligence?: number
  strength?: number,
  speed?: number,
  durability?: number,
  power?: number,
  combat?: number
}

interface Appearance {
  gender?: string | null
  race?: string | null
  height?: Array<string> | null
  weight?: Array<string> | null
  eyeColor?: string | null
  hairColor?: string | null
}

interface Biography {
  fullName?: string | null
  alterEgos?: string | null
  aliases?: Array<string> | string | null
  placeOfBirth?: string | null
  firstAppearance?: string | null
  publisher?: string | null
  alignment?: string | null
}

interface Work {
  occupation?: string | null
  base?: string | null
}

interface Connections {
  groupAffiliation?: string | null
  relatives?: string | null
}

interface Images {
  xs?: string | null
  sm?: string | null
  md?: string | null
  lg?: string | null
}

export interface Score {
  wins: number
  loss: number
}

export interface GameStage {
  start: boolean
  battle: boolean
  end: boolean
}