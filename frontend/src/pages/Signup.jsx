import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Signup from "../assets/Signup.png";
import {
	FaRegUser,
	FaIdCard,
	FaEnvelope,
	FaRegEye,
	FaRegEyeSlash,
	FaLock,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import FormErrors from "../components/FormErrors";
import InputField from "../components/InputField";

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// Formik and yup validation schema
	const initialvalues = {
		fullName: "",
		username: "",
		email: "",
		password: "",
	};
	const validationSchema = Yup.object({
		fullName: Yup.string()
			.min(5, "Must be 5 characters or more")
			.required("Name is required"),
		username: Yup.string().required("A username is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password should be minimum of 8 characters")
			.required("Password is required"),
	});
	const formik = useFormik({
		initialValues: initialvalues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="flex flex-row md:bg-primary h-screen">
			{/* Vector image container */}
			<div className="bg-primary h-screen hidden md:block md:w-[40%] relative">
				<img
					src={Signup}
					alt=""
					className="absolute right-[-15%] top-[10%]"
				/>
			</div>

			<div className="w-full md:w-[60%] rounded-l-[10%] p-10 md:p-16 md:pl-36 bg-white flex flex-col justify-center">
				<h1 className="font-bold text-2xl text-center p-10">
					Welcome To NAMSSN Website
				</h1>
				<form onSubmit={formik.handleSubmit} className="flex flex-col">
					<label className="mt-2" htmlFor="fullName">
						Full Name
					</label>

					<InputField
						type="text"
						name="fullName"
						id="fullName"
						onChange={formik.handleChange}
						value={formik.values.fullName}
						icon={<FaRegUser />}
            pad
					/>

					{formik.touched.fullName && formik.errors.fullName ? (
						<FormErrors error={formik.errors.fullName} />
					) : null}

					<label className="mt-2" htmlFor="username">
						Username
					</label>

					<InputField
						type="text"
						name="username"
						id="username"
						onChange={formik.handleChange}
						value={formik.values.username}
						icon={<FaIdCard />}
            pad
					/>

					{formik.touched.username && formik.errors.username ? (
						<FormErrors error={formik.errors.username} />
					) : null}

					<label className="mt-2" htmlFor="email">
						E-mail
					</label>

					<InputField
						type="text"
						name="email"
						id="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						icon={<FaEnvelope />}
            pad
					/>

					{formik.touched.email && formik.errors.email ? (
						<FormErrors error={formik.errors.email} />
					) : null}

					<label className="mt-2" htmlFor="password">
						Password
					</label>
					<div className="flex flex-row relative w-full">
						<InputField
							type={showPassword ? "text" : "password"}
							name="password"
							id="password"
							onChange={formik.handleChange}
							value={formik.values.password}
							icon={<FaLock />}
              pad
						/>
						{showPassword ? (
							<FaRegEyeSlash
								className="absolute right-2 flex self-center justify-center"
								onClick={handleShowPassword}
							/>
						) : (
							<FaRegEye
								className="absolute right-2 flex self-center justify-center"
								onClick={handleShowPassword}
							/>
						)}
					</div>
					{formik.touched.password && formik.errors.password ? (
						<FormErrors error={formik.errors.password} />
					) : null}

					<button
						type="submit"
						className="bg-black p-2 w-full text-white rounded-lg hover:bg-slate-700 my-5"
					>
						Sign Up
					</button>

					<div className="text-right">
						Already have an account?{" "}
						<Link to="/signin" className="text-primary">
							Sign In
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
