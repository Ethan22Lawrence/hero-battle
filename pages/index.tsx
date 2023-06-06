import GameBoard from "@/components/GameBoard"
import InfoPanel from "@/components/InfoPanel"

const Home = () => {

  return (
    <div className="flex justify-center justify-items-center p-20">
      <div className="max-w-[300px]">
        <InfoPanel/>
      </div>
      <div>
        <GameBoard/>
      </div>
    </div>
  )
}

export default Home