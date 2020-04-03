import React from "react";
import ToggleButton from "./ToggleButton";
import NumberInput from "./NumberInput";
import SelectControls from "./SelectControls";

const Controls = ({ controls, onToggle, onNumberChange, onSelect }) => {
	return (
		<div className="flex-1 bg-white shadow-lg border-t-2 m-3 p-3">
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
					{obj.hasOwnProperty("value") &&
						!obj.hasOwnProperty("options") &&
						!isNaN(parseInt(obj.value)) && (
							<NumberInput
								name={key}
								settings={obj}
								onNumberChange={onNumberChange}
							/>
						)}

					{obj.hasOwnProperty("options") && (
						<SelectControls name={key} settings={obj} onSelect={onSelect} />
					)}
				</div>
			))}
		</div>
	);
};

export default Controls;
