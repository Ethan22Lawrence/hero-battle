import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
  
const Navbar = () => {
    const score = useSelector((state: any ) => state.game?.score)

    return (
        <div className="p-[10px] bg-secondary flex items-center justify-between text-white fixed top-0 w-full">
            <div className='flex items-center justify-start'>
                <Link href='/' className="m-[10px]">Home</Link>
                <Link href='/characters' className="m-[10px]">Characters</Link>
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-[5px] w-[50px] bg-highlight rounded-md">
                    <div className="text-center">WIN</div>
                    <div className="text-center">{score.wins}</div>
                </div>
                <div className="mx-[5px] w-[50px] bg-highlight rounded-md">
                    <div className="text-center">LOSS</div>
                    <div className="text-center">{score.loss}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar