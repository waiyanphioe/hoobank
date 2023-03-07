import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = React.useState();
	return (
		<nav className="w-full flex py-6 justify-center items-center navbar">
			<a href="/">
				<img
					src={logo}
					alt="Hoo Bank"
					className=" w-[124px] h-[32px]"
					loading="lazy"
				/>
			</a>
			<ul className=" list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={index}
						className={`font-poppins font-medium cursor-pointer text-[16px] text-white ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						}`}
					>
						<a
							href={`#${nav.id}`}
							className="relative after:content-[''] after:absolute after:w-[0%] after:h-[3px] after:bottom-[-4px] after:left-0 after:ease-in-out after:duration-300 after:rounded-md after:bg-white hover:after:w-full"
						>
							{nav.title}
						</a>
					</li>
				))}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain cursor-pointer"
					loading="lazy"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className=" list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav, index) => (
							<li
								key={index}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
									index === navLinks.length - 1
										? "mr-0"
										: "mb-4"
								}`}
							>
								<a
									href={`#${nav.id}`}
									className="relative after:content-[''] after:absolute after:w-[0%] after:h-[3px] after:bottom-[-4px] after:left-0 after:ease-in-out after:duration-300 after:rounded-md after:bg-white hover:after:w-full"
								>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
