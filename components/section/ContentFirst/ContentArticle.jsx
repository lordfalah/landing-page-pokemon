import Link from "next/link";
import React from "react";
import Paragraf from "../../text/Paragraf";
import Text from "../../text/Text";

const ContentArticle = ({ className }) => {
	const addClass = className ? className : "";
	return (
		<article className={`${addClass}`}>
			<Text className="text-black font-bold sm:text-5xl xl:text-6xl">
				Gotta Catch Em All!
			</Text>
			<Paragraf className="w-full sm:w-4/5">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quos
				sed fugiat impedit repudiandae et placeat expedita veritatis quam
				explicabo?
			</Paragraf>

			<Link href="/#cardPokemon">
				<a
					className="bg-black text-white px-6 py-3 transition duration-150 
        ease-linear hover:shadow-xl shadow-slate-600 rounded-full inline-block"
				>
					More Information
				</a>
			</Link>
		</article>
	);
};

export default ContentArticle;
