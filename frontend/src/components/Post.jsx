import { FaCircleCheck, FaRegComment } from "react-icons/fa6";
import {
	BiDownvote,
	BiShareAlt,
	BiSolidDownvote,
	BiSolidUpvote,
	BiUpvote,
} from "react-icons/bi";
import Wrapper from "../assets/wrapper.png";

const Post = ({ isAdmin, upvotes, downvotes, shares, comments,text, name, username }) => {
	const date = new Date();
	const day = date.getDay();
	const month = date.toLocaleString("default", { month: "long" });

	return (
		<div className="border-b-2 border-gray-900 p-4 flex flex-row gap-2 h-fit xl:w-[800px]">
			<div>
				<img src={Wrapper} alt="" />
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex flex-row gap-5">
					<span className="font-semibold flex flex-row items-center gap-2">
						{name}
            {isAdmin && <FaCircleCheck color="#17A1FA" />}
					</span>
					<span>{username}</span>
					<span className="text-gray-500">
						{month} {day}
					</span>
				</div>

				{/* Post content goes here */}
				<div>
					{text?.map((text, index) => {
						return <div key={index}>{text}</div>;
					})}
				</div>

				{/* Post actions */}

				<div className="py-4 flex flex-row justify-between">
					<div>
						<span className="flex items-center gap-1">
							{upvotes ? (
								<>
									<BiSolidUpvote color="#17A1FA" /> {upvotes}
								</>
							) : (
								<>
									<BiUpvote /> {0}{" "}
								</>
							)}
						</span>
						<span>Upvotes</span>
					</div>
					<div>
						<span className="flex items-center gap-1">
							{downvotes ? (
								<>
									{" "}
									<BiSolidDownvote color="red" /> {downvotes}{" "}
								</>
							) : (
								<>
									{" "}
									<BiDownvote /> {0}{" "}
								</>
							)}
						</span>
						<span>Downvotes</span>
					</div>
					<div>
						<span className="flex items-center gap-1">
							<FaRegComment /> {comments}
						</span>
						<span>Comments</span>
					</div>
					<div>
						<span className="flex items-center gap-1">
							<BiShareAlt /> {shares}
						</span>
						<span>Shares</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
