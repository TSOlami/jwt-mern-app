import aboutIcon from '../assets/icons/about.svg';
import arrow from '../assets/icons/arrow.svg';

const AboutUs = () => {
  return (
    <section id="about-us" className="flex lg:flex-row flex-col justify-center gap-8 max-container">
      <div className='relative flex items-center w-full gap-8'>
        <img
          src={aboutIcon}
          alt="About Us"
          width={70}
          height={70}
        /> <h1 className='header-text'>About Us</h1>
      </div>
      <div className='flex-col'>
        <p className="text-xl font-crimson">
          At NAMSSN, we foster a community of passionate individuals who share a common love for mathematics and its applications. Our association brings together students, faculty, and enthusiasts to explore, learn, and grow together. Mathematics Department is hard like mad and i dont see wy a person would want a website designed for it. But i would try to make it beautiful sha. Using Illustratons and images
        </p>
        <div className="text-container flex border-primary">
        Know more about us<img src={arrow} alt="arrow" />
        </div>
      </div>
      
    </section>
  )
}

export default AboutUs