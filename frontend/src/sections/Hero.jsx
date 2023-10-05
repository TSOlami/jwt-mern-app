import { polygon } from "../assets"

const Hero = () => {
  return (
	<section
  id="hero"
  className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
  >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <div className="rounded-3xl border border-black items-center flex gap-2 justify-center py-[5px] px-[20px] text-xl font-crimson">
    Unlock the World of Mathematics <span><img src={polygon} alt="polygon" /></span>
    </div>
    <div className="header-text">
    NAMSSN <br />
    FUTMINNA Chapter
    </div>
    <div className="body-text">
    Mathematics Department is hard like mad and i dont see wy a person would want a website designed for it. But i  would try to make it beautiful sha. Using Illustratons and images 
    </div>
    </div>

  </section>
  )
}

export default Hero