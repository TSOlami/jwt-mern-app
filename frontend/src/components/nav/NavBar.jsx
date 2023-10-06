import { Hamburger, NamssnLogo } from "../../assets"
import { navLinks } from "../../constants"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
	<header className="padding-x py-[8px] absolute z-[10px] w-full">
    <nav className="flex justify-between items-center max-container">
      <div className="logo-container">
        <a href="/">
          <img src={NamssnLogo} alt="Logo" className="logo" />
        </a>
        <span className="logo-text py-[2px]">NAMSSN</span>
      </div>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link
            to={item.href}
            className="nav-text"
            >
            {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img
          src={Hamburger}
          alt="Menu"
          width={25}
          height={25}
        />
      </div>
    </nav>
  </header>
  )
}

export default NavBar
