import React from "react";
import ToggleButton from "./ToggleButton";
import NumberInput from "./NumberInput";

const Controls = ({ controls, onToggle, onNumberChange }) => {
	return (
		<div className="flex-1 bg-gray-100 ">
			{Object.entries(controls).map(([key, obj]) => (
				<div key={key} className="flex">
					{obj.type === "set" && (
						<ToggleButton
							label={obj.text}
							value={key}
							checked={obj.checked === "true"}
							onClick={onToggle}
						/>
					)}
					{obj.hasOwnProperty("value") && !isNaN(parseInt(obj.value)) && (
						<NumberInput
							name={key}
							settings={obj}
							onNumberChange={onNumberChange}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default Controls;
