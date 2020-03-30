import React, { useState, useEffect } from "react";

import Controls from "./components/Controls";
import Display from "./components/Display";
import data from "./data.json";

function App() {
	const [controls, setControls] = useState({});

	useEffect(() => {
		setControls({ ...data });
	}, []);

	const onToggle = e => {
		const { name, value } = e.target;
		const updatedControls = { ...controls, [name]: !(value === "true") };

		setControls(updatedControls);
	};

	return (
		<div className="flex">
			<Controls controls={controls} onToggle={onToggle} />
			<Display controls={controls} />
		</div>
	);
}

export default App;
