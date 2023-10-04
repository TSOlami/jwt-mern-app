import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div>
        <h1 className="text-3xl">Home</h1>
      </div>
    </div>
  )
}

export default Home