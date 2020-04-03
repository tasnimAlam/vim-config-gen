import React from "react";

const Button = ({ text, onClick }) => (
	<div className="m-3 float-right">
		<button
			className="bg-white tracking-wide text-gray-800 rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
			onClick={onClick}
		>
			<span className="mx-auto">{text}</span>
		</button>
	</div>
);

export default Button;
