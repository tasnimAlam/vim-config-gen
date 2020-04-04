import React, { Fragment, useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "./Button";

const Display = ({ controls }) => {
	const [copyText, setCopyText] = useState("");

	const setKeys = (key, value) => {
		if (typeof value === "undefined") {
			return <pre key={key}>set {key} </pre>;
		}
		return (
			<pre key={key}>
				set {key}={value}
			</pre>
		);
	};

	const letKeys = (key, obj) => {
		let value = obj.value === "<Space>" ? " " : obj.value;

		value =
			obj.hasOwnProperty("quote") && obj.quote === "true" && '"' + value + '"';

		return (
			<Fragment key={key}>
				<pre>
					let {key} = {value}
				</pre>
				{obj.value !== "\\" && <pre>noremap {obj.value} \</pre>}
			</Fragment>
		);
	};

	const customConfig = (key, value) => {
		return <pre key={key}>{value}</pre>;
	};

	const getContent = () => {
		let text = displayRef.current.innerHTML.split("</pre><pre>").join("\n");
		return (text = text.substring(5, text.length - 6));
	};

	const onCopy = () => {
		let text = getContent();
		setCopyText(text);
	};

	const onDownload = () => {
		let text = getContent();

		if (text) {
			let link = document.createElement("a");
			let content = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
			link.setAttribute("href", content);

			link.setAttribute("download", ".vimrc");
			link.click();
		}
	};

	const displayRef = useRef(null);

	return (
		<div className="flex-1">
			<div className="clearfix">
				<CopyToClipboard text={copyText}>
					<Button text="Copy" onClick={onCopy} />
				</CopyToClipboard>
				<Button text="Download" onClick={onDownload} />
			</div>

			<div className="max-w-lg overflow-scroll flex-1 bg-white border-t-2 m-3 p-3 shadow-lg text-gray-700">
				<div className="flex-1" ref={displayRef}>
					{Object.entries(controls).map(([key, obj]) => {
						const { type, checked, value } = obj;

						if (checked === "true") {
							if (type === "set") return setKeys(key, value);
							if (type === "let") return letKeys(key, obj);
							if (type === "custom") return customConfig(key, value);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Display;
