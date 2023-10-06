import { FaMagnifyingGlass } from "react-icons/fa6";
import { Avatar } from "../assets";

const HeaderComponent = ({title}) => {
	return (
		<div className="flex flex-row md:justify-between items-center p-5 md:py-2 border-b-2 border-gray-300">
      <img src={Avatar} alt="avatar" className="md:hidden"/>

			<h1 className="text-xl text-center w-full md:text-3xl">{title}</h1>
			<form action="" className="hidden md:flex  relative">
				<input
					type="text"
					placeholder="Search"
					className="rounded-2xl border-gray-300 border-2 p-1 w-56 md:w-72 pl-10"
				/>
				<FaMagnifyingGlass className="absolute left-2 flex self-center justify-center" />
			</form>
		</div>
	);
};

export default HeaderComponent;
