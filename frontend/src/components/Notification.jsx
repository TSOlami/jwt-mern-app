import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaCircleCheck, FaRegComment } from "react-icons/fa6";
import Actions from "./Actions";

const Notification = ({
	upvote,
	downvote,
	comment,
	name,
	avatar,
	content,
	isAdmin,
	username,
}) => {
	return (
		<div className="border-b-2 border-gray-300 p-4 flex flex-row gap-2 min-w-[400px] md:min-w-[450px] lg:min-w-[500px] xl:w-[700px]">
			<div className="text-xl">
				{upvote && <BiUpvote color="#17A1FA" />}
				{downvote && <BiDownvote color="red"/>}
				{comment && <FaRegComment />}
			</div>
			<div className="flex flex-col">
				<div>
					<img src={avatar} alt="" />
				</div>
				<div className="flex flex-row gap-2">
					<span className="font-semibold inline-flex flex-row items-center gap-2">
						{name}
						{isAdmin && <FaCircleCheck color="#17A1FA" />}
					</span>
					{comment && <span>@{username}</span>}
					<span>
						{upvote && "upvoted your post"}
						{downvote && "downvoted your post"}
						{comment && "commented on your post"}
					</span>
				</div>
				<div className="pt-2">{content}</div>
				{comment && <Actions/>}
			</div>
		</div>
	);
};

export default Notification;
