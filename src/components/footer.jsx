import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../constants/styles";

const Footer = () => {
	return (
		<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div
				className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
			>
				<div className="flex flex-1 flex-col justify-start mr-10">
					<img
						src={logo}
						alt="logo"
						className=" w-[266px] h-[72px] object-contain"
					/>
					<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
						A new way to make the payments easy, reliable and
						secure.
					</p>
				</div>
				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((footer, index) => (
						<div
							key={index}
							className="flex flex-col ss:my-0 my-4 min-w-[150px]"
						>
							<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
								{footer.title}
							</h4>
							<ul className=" list-none mt-4">
								{footer.links.map((link) => (
									<li
										key={link.name}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
											index !== footer.links.length - 1
												? "mb-2"
												: "mb-0"
										}`}
									>
										<a href={link.link} target="_blank">
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
				<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
					2021 HooBank. All Rights Reserved.
				</p>
				<div className="flex flex-row md:mt-0 mt-6">
					{socialMedia.map((social, index) => (
						<a href={social.link} key={social.id} target="_blank">
							<img
								src={social.icon}
								alt={social.icon}
								className={`w-[21[x] h-[21px] object-contain ${
									index !== socialMedia.length - 1
										? "mr-6"
										: "mr-0"
								}`}
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
