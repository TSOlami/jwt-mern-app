import { AboutImg } from "../assets";
import { Footer, NavBar } from "../components";
import Team from "../components/Team";
import { mockTeam } from "../data";

const AboutUsPage = () => {
	return (
		<main>
			<NavBar />
			<div className="pt-24 p-10">
				<div className="font-bold text-3xl px-8">About Us</div>
				<h1 className="text-center font-bold text-3xl md:text-4xl p-8">
					Know more about NAMSSN FUTMINNA, your HOD, your Excos, and
					the 2+2 of the department.
				</h1>
				<div className="flex items-center justify-center">
					<img src={AboutImg} alt="" />
				</div>

				<p className="md:p-10 p-5 md:w-[80%] m-auto my-5">
					At NAMSSN, we foster a community of passionate individuals
					who share a common love for mathematics and its
					applications. Our association brings together students,
					faculty, and enthusiasts to explore, learn, and grow
					together. At NAMSSN, we foster a community of passionate
					individuals who share a common love for mathematics and its
					applications. Our association brings together students,
					faculty, and enthusiasts to explore, learn, and grow
					together. Mathematics Department is hard like mad and i dont
					see wy a person would want a website designed for it. But i
					would try to make it beautiful sha. Using Illustratons and
					images{" "}
				</p>

				{/* Principal offices */}

				<h1 className="text-2xl font-bold text-center p-5">
					Principal Offices of the Department
				</h1>
				<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-5 mb-10">
					{mockTeam
						.filter((member) => member.role === "principal")
						.map((member, index) => (
							<div key={index}>
								<Team
									name={member.name}
									position={member.position}
									image={`src/assets/images/${member.image}`}
									facebook={member.facebook}
									linkedin={member.linkedin}
								/>
							</div>
						))}
				</div>

				{/* Excos */}
				<h1 className="text-2xl font-bold text-center p-5 pb-2">
					NAMSSN Executives{" "}
				</h1>
				<h1 className="text-primary text-2xl font-bold p-5 pt-0 text-right lg:flex lg:items-center lg:justify-center lg:relative lg:left-[50%] lg:w-fit">
					2022/2023 Session
				</h1>

				<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-5 mb-10">
					{mockTeam
						.filter((member) => member.role === "executive")
						.map((member, index) => (
							<div key={index}>
								<Team
									name={member.name}
									position={member.position}
									image={`src/assets/images/${member.image}`}
									facebook={member.facebook}
									linkedin={member.linkedin}
								/>
							</div>
						))}
				</div>

				{/* Tech team */}
				<h1 className="text-2xl font-bold text-center p-5 pb-2">
					&lt; NAMSSN Tech Team /&gt;
				</h1>

				<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-5 mb-10">
					{mockTeam
						.filter((member) => member.role === "developer")
						.map((member, index) => (
							<div key={index}>
								<Team
									name={member.name}
									position={member.position}
									image={`src/assets/images/${member.image}`}
									facebook={member.facebook}
									linkedin={member.linkedin}
								/>
							</div>
						))}
				</div>
			</div>

			{/* Footer */}
			<Footer/>
		</main>
	);
};

export default AboutUsPage;
