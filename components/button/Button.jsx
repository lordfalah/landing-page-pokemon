import React from "react";

const Button = ({ className, children, ...props }) => {
	const addClass = className ? className : "";

	return (
		<button
			{...props}
			type="button"
			className={`rounded-full ${addClass} cursor-pointer`}
		>
			{children}
		</button>
	);
};

export default Button;
