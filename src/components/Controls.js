import React, { useState, useEffect } from "react";
import data from "../data.json";
import ToggleButton from "./ToggleButton";

const Controls = () => {
	const [controls, setControls] = useState({});

	useEffect(() => {
		setControls({ ...data });
	}, []);

	const onToggle = e => {
		const { name, value } = e.target;
		console.log(name, value);
		let updatedControls = { ...controls, [name]: !value };
		setControls(updatedControls);
	};

	console.log("controls ", controls);

	return (
		<div className="flex-1 bg-gray-100 h-12">
			{Object.entries(controls).map(([key, value]) => (
				<div key={key}>
					<ToggleButton label={key} checked={value} onClick={onToggle} />
				</div>
			))}
		</div>
	);
};

export default Controls;
