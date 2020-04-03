import React from "react";

const CopyButton = ({ onCopy }) => (
	<div className="m-3 float-right">
		<button
			className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
			onClick={onCopy}
		>
			<span className="mx-auto">Copy</span>
		</button>
	</div>
);

export default CopyButton;
