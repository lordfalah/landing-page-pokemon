import Image from "next/image";
import React from "react";

const ContentImg = ({ className }) => {
	const addClass = className ? className : "";

	return (
		<div className={`${addClass}`}>
			<Image
				src="/img/charizard.png"
				alt="Lizard"
				width="100%"
				height="100%"
				layout="responsive"
				objectFit="contain"
				priority
			/>
		</div>
	);
};

export default ContentImg;
