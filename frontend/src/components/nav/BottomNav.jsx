import { FaHome } from "react-icons/fa"
import { FaMagnifyingGlass, FaMicrophone } from "react-icons/fa6"
import { Link } from "react-router-dom"

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 flex flex-row justify-between w-full px-4 md:hidden bg-white shadow-3xl">
      <Link to='/home' className="flex flex-col items-center justify-center hover:bg-black hover:text-white p-2 rounded-lg"><FaHome/> Home</Link>
      <div className="flex flex-col items-center justify-center  hover:bg-black hover:text-white p-2 rounded-lg"><FaMagnifyingGlass/> Search</div>
      <Link to='/announcements' className="flex flex-col items-center justify-center  hover:bg-black hover:text-white p-2 rounded-lg"><FaMicrophone/> Announcements</Link>
    </div>
  )
}

export default BottomNav