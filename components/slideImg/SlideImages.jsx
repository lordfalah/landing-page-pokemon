import React from "react";
import images from "../../components/images/ImageCards";
import ImgShow from "./ImgShow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideImages = ({ className }) => {
	const addClass = className ? className : "";
	const { ref: parent, entry } = useInView();

	return (
		<div ref={parent} className="overflow-hidden sm:w-full lg:w-[43%]">
			<motion.div
				drag="x"
				dragConstraints={{ right: 0, left: -entry?.boundingClientRect?.width }}
				whileHover={{ cursor: "grab" }}
				whileTap={{ cursor: "grabbing" }}
				className={`${addClass} mx-auto lg:mx-0 w-full
        		gap-8 `}
			>
				{images.map((img, idx) => {
					return (
						<ImgShow
							source={img.source}
							className="min-w-[15rem] overflow-hidden"
							key={idx}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};

export default SlideImages;
