import React, { Fragment, useContext } from "react";
import api from "../../../api/api";
import { DataContext, ThemeContext } from "../../../pages";
import Button from "../../button/Button";

function random_rgb() {
	let o = Math.round,
		r = Math.random,
		s = 255;
	return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

const DetailsCard = ({ name }) => {
	const { setIsOpen } = useContext(ThemeContext);
	const { setDataPokemon, setColor } = useContext(DataContext);

	const handleDetails = async (name) => {
		const response = await api.get(`pokemon/${name}`);

		setDataPokemon(response.data);
		setIsOpen(true);
		setColor(random_rgb());
	};

	return (
		<Fragment>
			<div className="w-full flex justify-center my-10">
				<Button
					type="button"
					className="bg-gradient-to-r from-green-400 to-blue-500/50
          w-11/12 py-3"
					onClick={() => handleDetails(name)}
				>
					<span className="font-medium text-white">DETAILS</span>
				</Button>
			</div>
		</Fragment>
	);
};

export default DetailsCard;
