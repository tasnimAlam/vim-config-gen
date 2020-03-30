import React from "react";

const Display = ({ controls }) => {
	return (
		<div className="flex-1 bg-gray-500 ">
			{Object.entries(controls).map(([key, value]) => {
				return typeof value === "boolean" && value && <p>set {key} </p>;
			})}
		</div>
	);
};
export default Display;
