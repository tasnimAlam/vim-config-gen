import React from "react";

const Display = ({ controls }) => {
	const setKeys = (key, value) =>
		value === "true" && <p key={key}>set {key} </p>;

	return (
		<div className="flex-1 bg-gray-500 ">
			{Object.entries(controls).map(([key, obj]) => {
				const { type, value } = obj;

				if (type === "set") return setKeys(key, value);
			})}
		</div>
	);
};

export default Display;
