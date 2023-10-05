import { Link } from "react-router-dom";
import {
	FaHouse,
	FaBell,
	FaGraduationCap,
	FaMoneyBill,
	FaPerson,
	FaArrowRightFromBracket,
	FaCircleCheck
} from "react-icons/fa6";

const Sidebar = () => {
	const isAdmin = true;
	return (
		<div className= "w-72 w- bg-greyish h-screen flex flex-col gap-20 p-5">
			{/* profile info */}
			<div className="pb-8">
				<div>
					<img src="" alt="" />
				</div>
				<div className="flex flex-col text-sm">
					<span className="font-semibold flex flex-row items-center gap-2">
						Ifedimeji Omoniyi
            {isAdmin && ( 
            <FaCircleCheck color="blue" />
            )}
					</span>
					<span>Design_Hashira</span>
				</div>
			</div>

			{/* sidebar nav */}
			<div>
				<ul className="text-lg flex flex-col gap-5">
					<li>
						<Link
							to="/home"
							className="transition duration-500 flex flex-row gap-3 items-center hover:bg-primary hover:text-white p-2 rounded-lg"
						>
							<FaHouse />
							<span>Home</span>
						</Link>
					</li>

					<li>
						<Link
							to="/notifications"
							className="transition duration-500 flex flex-row gap-3 items-center hover:bg-primary hover:text-white p-2 rounded-lg"
						>
							<FaBell />
							<span>Notifications</span>
						</Link>
					</li>
					<li>
						<Link
							to="/resources"
							className="transition duration-500 flex flex-row gap-3 items-center hover:bg-primary hover:text-white p-2 rounded-lg"
						>
							<FaGraduationCap />
							<span>Learning Resources</span>
						</Link>
					</li>
					<li>
						<Link
							to="/payment"
							className="transition duration-500 flex flex-row gap-3 items-center hover:bg-primary hover:text-white p-2 rounded-lg"
						>
							<FaMoneyBill />
							<span>Payment</span>
						</Link>
					</li>
					<li>
						<Link
							to="/profile"
							className="transition duration-500 flex flex-row gap-3 items-center hover:bg-primary hover:text-white p-2 rounded-lg"
						>
							<FaPerson />
							<span>Profile</span>
						</Link>
					</li>
				</ul>
			</div>

			{/* Log-out */}

			<div className="pt-10">
				<Link
					to="/"
					className="transition duration-500 text-red-500 flex flex-row gap-3 items-center hover:bg-red-500 hover:text-white p-2 rounded-lg"
				>
					<FaArrowRightFromBracket /> Log Out
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
