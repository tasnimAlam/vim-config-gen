import React from "react";

const CustomConfigArea = ({ name, settings, onChange }) => {
	return (
		<textarea
			className="w-11/12 border h-32 ml-8 mt-2 shadow-md"
			name={name}
			value={settings.value}
			onChange={onChange}
		/>
	);
};

export default CustomConfigArea;
