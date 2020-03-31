import React from "react";
import ToggleButton from "./ToggleButton";

const Controls = ({ controls, onToggle }) => {
	return (
		<div className="flex-1 bg-gray-100 ">
			{Object.entries(controls).map(([key, obj]) => (
				<div key={key}>
					{obj.type === "set" && (
						<ToggleButton
							label={obj.text}
							value={key}
							checked={obj.value === "true"}
							onClick={onToggle}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default Controls;
