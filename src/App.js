import React from "react";

import Controls from "./components/Controls";
import Display from "./components/Display";

function App() {
	return (
		<div className="flex">
			<Controls />
			<Display />
		</div>
	);
}

export default App;
