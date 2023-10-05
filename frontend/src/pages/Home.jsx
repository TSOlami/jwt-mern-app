import { FaMagnifyingGlass } from "react-icons/fa6";
import Post from "../components/Post";
import Sidebar from "../components/nav/Sidebar";
import { mockTexts, mockTexts2 } from "../data";
import AnnouncementContainer from "../components/AnnouncementContainer";

const Home = () => {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="flex flex-col">
				<div className="flex flex-row justify-between items-center p-5 py-2 border-b-2 border-gray-900">
					<h1 className="text-3xl">Home</h1>
					<form action="" className="relative flex ">
						<input
							type="text"
							placeholder="Search"
							className="rounded-2xl border-gray-500 border-2 p-1 w-96 pl-10"
						/>
						<FaMagnifyingGlass className="absolute left-2 flex self-center justify-center" />
					</form>
				</div>
				<Post upvotes="3224" downvotes="30" shares="5" comments="10" isAdmin={true} text={mockTexts} name="Ifedimeji Omoniyi" username= "@design_hashira"/>

				<Post upvotes="20" downvotes="300" shares="200" comments="150" isAdmin={false} text={mockTexts2} name="Bola Ahmed Tinubu" username= "@bobo chicago"/>
			</div>
			<AnnouncementContainer/>
		</div>
	);
};

export default Home;
