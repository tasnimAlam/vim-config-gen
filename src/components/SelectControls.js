import React from "react";

const SelectControls = ({ name, settings, onSelect }) => {
	const { value, checked, options } = settings;

	if (options.length === 0) return;

	return (
		<div className="relative inline-flex mt-4 ml-3 pt-0">
			<svg
				className="w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 412 232"
			>
				<path
					d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
					fill={`${checked === "true" ? "#4a5568" : "#cbd5e0"}`}
					fillRule="nonzero"
				/>
			</svg>
			<select
				name={name}
				value={value}
				className={`border border-gray-300 shadow text-sm h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none ${
					checked === "true" ? "text-gray-700" : "text-gray-400"
				}`}
				onChange={onSelect}
				disabled={checked !== "true"}
			>
				{options.map((option, index) => (
					<option key={index}>{option}</option>
				))}
			</select>
		</div>
	);
};

export default SelectControls;
