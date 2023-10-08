import { NavBar, Footer } from "../components"
import { Hero, AboutUs, Features, FAQs, ContactUs } from "../sections"

const Landing = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <AboutUs />
      </section>
      <section className="padding">
        <Features />
      </section>
      <section className="padding">
        <FAQs />
      </section>
      <section className="padding">
        <ContactUs />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default Landing