'use client'
import { useGetAllCharactersQuery, useLazyGetCharacterQuery } from "@/characterApiService"
import Modal from "@/components/Modal"
import { CHARACTERS } from "@/data"
import { Character } from "@/types"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Suspense, useCallback, useEffect, useRef, useState } from "react"

const Characters = () => {
    const [page, setPage] = useState(1)
    const {data: characters} = useGetAllCharactersQuery(page)
    const [characterList, setCharacterList] = useState<Character[]>([])
    const [showModal, setShowModal] = useState(false)
    const [characterDetails, setCharacterDetails] = useState<Character>()
    const [searchQuery, setSearchQuery] = useState<String>("")
    const [ trigger, { data: charOnSearch } ] = useLazyGetCharacterQuery()
    const searchRef: any = useRef(null)
    const [renderedList, setRenderedList] = useState<Character[]>([])
    const listInnerRef: any = useRef();

    useEffect(() => {     
        document.addEventListener("scroll", ()=> {  
            onScroll()
        })
        return () => {
            document.removeEventListener("scroll", ()=> {  
                onScroll()
            })
        }
     })

     useEffect(() => {
        if(page === 1) {
            setCharacterList(characters)
        } else {
            setCharacterList((prevState) => [...prevState, ...characters])
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [characters])

     useEffect(() => {
        if((typeof charOnSearch !== 'undefined' && charOnSearch?.length > 0) || typeof searchQuery !== 'undefined') {
            setRenderedList(charOnSearch)
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [charOnSearch])

     useEffect(() => {
        setRenderedList(characterList)
     }, [characterList])

    const handleSearch = () => {
        trigger(searchQuery)
    }

    const handleClear = async () => {
        searchRef.current.value = ""
        await setSearchQuery("")
        await trigger("")
        await setRenderedList(characterList)
    }

    const onScroll = useCallback(() => {
        const element = document.getElementById('list-container')
        const rect = element!.getBoundingClientRect()
        if(rect.bottom < document.documentElement.scrollTop) {
            setPage(page + 1)
        }
    }, [page])

    const openModal = (character: Character) => {
        setCharacterDetails(character)
        setShowModal(true) 
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const CharacterCard = (character: Character) => {
        return (
            <button 
            className={`text-white h-[250px] w-[150px] m-[5px] bg-cover rounded-md shadow-lg shadow-black border-4 flex items-end transition ease-in-out bg-blue-500 hover:border-lime-500`}
            style={{backgroundImage: `url(${character?.images?.sm})`}}
            onClick={() => openModal(character)}
        >
            <div className="bg-black/[.6] flex flex-col w-full">
                <div>
                    <div className="text-center">{character?.name}</div>
                </div>
            </div>
        </button>
        )
    }

    return (
        <div>
            <div className="flex flex-row justify-center p-[20px]">
                <div className="relative w-6/12 mr-[5px]">
                    <input className="w-full rounded-md p-[5px]" onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} ref={searchRef}/>
                    { searchQuery &&
                        <button className="absolute right-[10px] h-full" onClick={handleClear}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    }
                </div>
                <button className="rounded-md bg-highlight text-white px-[10px]" onClick={handleSearch}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center" id="list-container">
                {showModal &&  characterDetails && <Modal onClick={closeModal} character={characterDetails} /> }
                {
                    typeof renderedList !== 'undefined' && renderedList.map((character : Character) => {
                        return (
                            <div className="m-[10px]" key={character.id}>
                                <CharacterCard {...character}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Characters