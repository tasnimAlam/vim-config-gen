import React, { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CopyButton from "./CopyButton";

const Display = ({ controls }) => {
	const [copyText, setCopyText] = useState("");

	const setKeys = (key, value) => {
		if (typeof value === "undefined") {
			return <p key={key}>set {key} </p>;
		}
		return (
			<p key={key}>
				set {key}={value}
			</p>
		);
	};

	const onCopy = () => {
		let text = displayRef.current.innerHTML.split("</p><p>").join("\n");
		text = text.substring(3, text.length - 4);

		setCopyText(text);
	};

	const displayRef = useRef(null);

	return (
		<div className="flex-1 bg-gray-500">
			<CopyToClipboard text={copyText}>
				<CopyButton onClick={onCopy} />
			</CopyToClipboard>

			<div className="flex-1 bg-gray-500" ref={displayRef}>
				{Object.entries(controls).map(([key, obj]) => {
					const { type, checked, value } = obj;

					if (checked === "true") {
						if (type === "set") return setKeys(key, value);
					}
				})}
			</div>
		</div>
	);
};

export default Display;
