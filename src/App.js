import React, { useState, useEffect } from "react";

import Controls from "./components/Controls";
import data from "./data.json";
import Display from "./components/Display";

function App() {
	const [controls, setControls] = useState({});

	useEffect(() => {
		setControls({ ...data });
	}, []);

	const onToggle = e => {
		const { name, value } = e.target;
		const updatedControls = {
			...controls,
			[name]: {
				...controls[name],
				checked: value === "true" ? "false" : "true"
			}
		};

		setControls(updatedControls);
	};

	const onNumberChange = (e, name) => {
		const updatedControls = {
			...controls,
			[name]: { ...controls[name], value: e.target.value || 0 }
		};
		setControls(updatedControls);
	};

	const onSelect = e => {
		const { name, value } = e.target;
		const updatedControls = {
			...controls,
			[name]: { ...controls[name], value: value }
		};

		setControls(updatedControls);
	};

	const onCustomConfigChange = e => {
		const { name, value } = e.target;
		const updatedControls = {
			...controls,
			[name]: { ...controls[name], value }
		};

		setControls(updatedControls);
	};

	return (
		<div className="flex">
			<Controls
				controls={controls}
				onToggle={onToggle}
				onNumberChange={onNumberChange}
				onSelect={onSelect}
				onCustomConfigChange={onCustomConfigChange}
			/>
			<Display controls={controls} />
		</div>
	);
}

export default App;
