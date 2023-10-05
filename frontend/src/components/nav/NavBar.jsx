import { NamssnLogo } from "../../assets"

const NavBar = () => {
  return (
	<header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <div className="logo-container">
        <a href="/">
          <img src={NamssnLogo} alt="Logo" className="logo" />
        </a>
        <span className="text-3xl font-bold py-2 border-b-2">NAMSSN</span>
      </div>
      <div className="flex  items-center">
        <a href="/login" className="text-lg font-bold mr-4">Login</a>
        <a href="/signup" className="text-lg font-bold">Sign Up</a>
      </div>
    </nav>
  </header>
  )
}

export default NavBar
