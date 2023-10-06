import AnnouncementContainer from "../components/AnnouncementContainer";
import Sidebar from "../components/Sidebar";
import ProfileImg from "../assets/profileImg.png";
import { FaCircleCheck } from "react-icons/fa6";
import Post from "../components/Post";
import Wrapper from "../assets/wrapper.png";
import { mockTexts } from "../data";

const Profile = () => {
	const isAdmin = true;
	const noOfPosts = 120;

	return (
		<div className="flex flex-row">
			<Sidebar />
			<div>
				<div className="p-3 pl-6 flex flex-col">
					<span className="font-semibold text-lg">
						Ifedimeji Omoniyi
					</span>
					<span>{noOfPosts} posts</span>
				</div>
				{/* profile image and cover image */}
				<div className="w-full h-32 bg-primary z-[-1]"></div>
				<div className="flex flex-row justify-between items-center relative top-[-30px] my-[-30px] p-3 pl-6 z-[0]">
					<img src={ProfileImg} alt="" />
					<button className="border-2 rounded-2xl border-gray-700 p-1 px-2 hover:text-white hover:bg-primary hover:border-none">
						Edit Profile
					</button>
				</div>
				<div className="flex flex-col text-sm p-3 pl-6">
					<span className="font-semibold flex flex-row items-center gap-2 text-lg">
						Ifedimeji Omoniyi
						{isAdmin && <FaCircleCheck color="#17A1FA" />}
					</span>
					<span>Design_Hashira</span>
				</div>
				<div className="font-semibold px-3 pl-6">
					<span className="font-semibold text-xl">215</span> points
				</div>

				<div className="px-3 pt-3 border-b-2 pl-6 text-primary"><span className="border-b-4 border-primary">Posts</span></div>
				<div>
					<Post
						upvotes="3224"
						downvotes="30"
						shares="5"
						comments="10"
						isAdmin={true}
						text={mockTexts}
						name="Ifedimeji Omoniyi"
						username="@design_hashira"
						avatar={Wrapper}
					/>
				</div>
			</div>
			<AnnouncementContainer />
		</div>
	);
};

export default Profile;
