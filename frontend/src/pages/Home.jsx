import { mockTexts, mockTexts2 } from "../data";

import { Sidebar, Post, AnnouncementContainer } from "../components";
import { Wrapper, Avatar } from '../assets';
import HeaderComponent from "../components/HeaderComponent";
import { BottomNav } from "../components";

const Home = () => {
	return (
		<div className="flex ">
			<Sidebar/>
			<div className="flex flex-col">
				<HeaderComponent title="Home"/>
				<Post upvotes="3224" downvotes="30" shares="5" comments="10" isAdmin={true} text={mockTexts} name="Ifedimeji Omoniyi" username= "@design_hashira" avatar={Wrapper}/>

				<Post upvotes="20" downvotes="300" shares="200" comments="150" isAdmin={false} text={mockTexts2} name="Bola Ahmed Tinubu" username= "@bobo chicago" avatar={Avatar}/>
				<Post upvotes="20" downvotes="300" shares="200" comments="150" isAdmin={false} text={mockTexts2} name="Bola Ahmed Tinubu" username= "@bobo chicago" avatar={Avatar}/>
				<Post upvotes="20" downvotes="300" shares="200" comments="150" isAdmin={false} text={mockTexts2} name="Bola Ahmed Tinubu" username= "@bobo chicago" avatar={Avatar}/>
			</div>
			<AnnouncementContainer/>
			<BottomNav/>
		</div>
	);
};

export default Home;
