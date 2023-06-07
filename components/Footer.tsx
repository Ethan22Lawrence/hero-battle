import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

const Footer = () => {
    return (
        <div className="p-[10px] bg-secondary flex items-center justify-center text-white fixed bottom-0 w-[100%]">
            <Link href='https://github.com/Ethan22Lawrence/hero-battle' target="_blank" className="m-[10px]"><FontAwesomeIcon icon={faGithub} /> Source code</Link>
        </div>
    )
}

export default Footer