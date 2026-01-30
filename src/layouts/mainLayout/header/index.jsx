import React from "react";

const Header = ({ logo, name }) => {
	return (
		<header
			className="flex items-center justify-start absolute top-0 left-0 w-full p-2 px-4
                 backdrop-blur-md bg-white/30 shadow-xl border-b border-white/20 
                 rounded-b-2xl"
		>
			<div className="w-auto bg-white h-14 p-1 mr-4 overflow-hidden ring-2 ring-[#0D9447]">
				<img
					src={logo ?? ""}
					alt={`${name}'s avatar`}
					className="w-full h-full object-cover"
				/>
			</div>

			<h1
				className="text-2xl font-semibold text-[#0D9447] drop-shadow-md"
				style={{
					textShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
				}}
			>
				{name}
			</h1>
		</header>
	);
};

export default Header;
