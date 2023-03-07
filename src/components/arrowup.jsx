import React from "react";
import { arrow_up } from "../assets";

const ArrowUp = () => {
	const [showScroll, setShowScroll] = React.useState(false);

	const scrollUp = () => {
		window.scrollY >= 400 ? setShowScroll(true) : setShowScroll(false);
	};
	window.addEventListener("scroll", scrollUp);
	return (
		<a
			href="#"
			className={showScroll ? "scrollup show-scroll" : "scrollup"}
			id="scroll-up"
		>
			<img
				src={arrow_up}
				alt="arrowup"
				className=" w-[1.5rem] h-[1.5rem] object-contain"
			/>
		</a>
	);
};

export default ArrowUp;
