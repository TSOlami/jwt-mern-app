import { polygon, heroImage } from "../assets"

const Hero = () => {
  return (
	<section
  id="hero"
  className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
  >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <div className="text-container">
    Unlock the World of Mathematics <span><img src={polygon} alt="polygon" /></span>
    </div>
    <div className="header-text">
    NAMSSN <br />
    FUTMINNA Chapter
    </div>
    <div className="body-text">
    Mathematics Department is hard like mad and i dont see wy a person would want a website designed for it. But i  would try to make it beautiful sha. Using Illustratons and images 
    </div>
    <div className="flex py-5 gap-4">
    <button className="button-1">Sign Up</button>
    <button className="button-2">Log In</button>
    </div>
    </div>
    <div className="pt-28">
      <img
      src={heroImage}
      alt="Hero"
      />
    </div>
  </section>
  )
}

export default Hero