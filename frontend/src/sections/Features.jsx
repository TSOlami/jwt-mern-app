import image4 from '../assets/images/image4.svg';
import image6 from '../assets/images/image6.svg';

const Features = () => {
  return (
		<section>
    <h1 className="header-text text-center max-w-xl mx-auto">Why You Should Use NAMSSN Website</h1>
    <div className="flex flex-col justify-center items-center pt-16 sm:pt-10">
      <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-row bg-tertiary mx-auto rounded-2xl shadow-xl">
         <div className="flex flex-col justify-center px-8 pt-20 pb-10">
         <h3 className="text-3xl font-bold font-crimson">Blog</h3>
         <p className="text-xl font-crimson">Get access to daily educational blog posts to keep you informed about the daily happenings in the department. Get your questions answered without issues and never be clueless about the department</p>
         </div>
         <img src={image4} alt="" />
        </div>
        <div className="flex flex-row bg-tertiary rounded-2xl max-w-[25rem] mx-auto shadow-xl">
         <div className="flex flex-col justify-center px-10 pt-20 pb-10">
         <h3 className="text-3xl font-bold font-crimson">Blog</h3>
         <p className="text-xl font-crimson mx-auto">Get access to daily educational blog posts to keep you informed about the daily happenings in the department. Get your questions answered without issues and never be clueless about the department</p>
         </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10 pt-8">
        <div className="flex flex-row bg-tertiary rounded-2xl mx-auto max-w-[25rem] shadow-xl">
         <div className="flex flex-col justify-center px-10 pt-20 pb-10">
         <h3 className="text-3xl font-bold font-crimson">Blog</h3>
         <p className="text-xl font-crimson">Get access to daily educational blog posts to keep you informed about the daily happenings in the department. Get your questions answered without issues and never be clueless about the department</p>
         </div>
        </div>
        <div className="flex flex-row bg-zinc-900 mx-auto rounded-2xl shadow-xl">
         <div className="flex flex-col justify-center px-10 pt-20 pb-10">
         <h3 className="text-3xl text-white font-bold font-crimson">Blog</h3>
         <p className="text-xl text-white font-crimson">Get access to daily educational blog posts to keep you informed about the daily happenings in the department. Get your questions answered without issues and never be clueless about the department</p>
         </div>
         <img src={image6} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features