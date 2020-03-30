import React from "react";
import ToggleButton from "./ToggleButton";

const Controls = ({ controls, onToggle }) => {
	return (
		<div className="flex-1 bg-gray-100 ">
			{Object.entries(controls).map(([key, value]) => (
				<div key={key}>
					<ToggleButton label={key} checked={value} onClick={onToggle} />
				</div>
			))}
		</div>
	);
};

export default Controls;
