import React from "react";
import ToggleButton from "./ToggleButton";

const Controls = ({ controls, onToggle }) => {
	const onNumberChange = () => console.log("changing number");

	return (
		<div className="flex-1 bg-gray-100 ">
			{Object.entries(controls).map(([key, obj]) => (
				<div key={key}>
					{obj.type === "set" && (
						<ToggleButton
							label={obj.text}
							value={key}
							checked={obj.checked === "true"}
							onClick={onToggle}
						/>
					)}
					{obj.checked === "true" &&
						obj.hasOwnProperty("value") &&
						!isNaN(parseInt(obj.value)) && (
							<input
								type="number"
								value={obj.value}
								onChange={onNumberChange}
							/>
						)}
				</div>
			))}
		</div>
	);
};

export default Controls;
