import React from "react";

const NumberInput = ({ name, settings, onNumberChange }) => (
	<div className="mt-4 ml-3 pt-0">
		<input
			type="number"
			placeholder={settings.value}
			className={`px-2 py-1 placeholder-gray-400 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full ${
				settings.checked === "true" ? "text-gray-700" : "text-gray-400"
			}`}
			min={0}
			value={parseInt(settings.value)}
			name={name}
			onChange={e => onNumberChange(e, name)}
			disabled={settings.checked !== "true"}
		/>
	</div>
);

export default NumberInput;
