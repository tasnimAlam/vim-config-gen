import React from "react";

const Display = ({ controls }) => {
	const setKeys = (key, value) => {
		if (typeof value === "undefined") {
			return <p key={key}>set {key} </p>;
		}
		return (
			<p key={key}>
				set {key}={value}
			</p>
		);
	};

	return (
		<div className="flex-1 bg-gray-500 ">
			{Object.entries(controls).map(([key, obj]) => {
				const { type, checked, value } = obj;

				if (checked === "true") {
					if (type === "set") return setKeys(key, value);
				}
			})}
		</div>
	);
};

export default Display;
