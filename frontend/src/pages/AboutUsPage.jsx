import { NavBar, Footer } from "../components"
import { Group1, Rectangle15 } from "../assets"

const AboutUsPage = () => {
  return (
	<main className="relative">
		<NavBar/>

		{/* Hero section */}
		<section className="p-16 pt-28 md:pt-10 w-full sm:h-screen">
      <div className="pt-28 max-md:pt-16">
      <h2 className="text-2xl font-bold font-merriweather">About Us</h2>
        <div className="flex gap-6 mr-10">
        <h1 className="header-text">Know more about NAMSSN FUTMINNA, your HOD, your Excos, and the 2+2 of the department.</h1>
        <img src={Group1} alt="" />
        </div>
        <img src={Rectangle15} alt="" className="md:py-8 py-4"/>
        <p className="body-text pt-4">
        At NAMSSN, we foster a community of passionate individuals who share a common love for mathematics and its applications. Our association brings together students, faculty, and enthusiasts to explore, learn, and grow together.
        At NAMSSN, we foster a community of passionate individuals who share a common love for mathematics and its applications. Our association brings together students, faculty, and enthusiasts to explore, learn, and grow together. Mathematics Department is hard like mad and i dont see wy a person would want a website designed for it. But i  would try to make it beautiful sha. Using Illustratons and images </p>
      </div>
		</section>

		{/* Principal Offices of the Department */}
    <section className="padding">
    <h1 className="header-text text-center mt-28 max-md:mt-50">Principal Offices of the Department</h1>
    </section>

    {/* Departmental Executives */}
    <section className="padding">
    Departmental Executives
    </section>

    {/* NAMSSN Tech Team */}
    <section className="padding">
    NAMSSN Tech Team 
    </section>

		<Footer/>
	</main>
  )
}

export default AboutUsPage