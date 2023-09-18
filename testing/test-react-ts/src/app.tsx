import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
	return (
		<>
			<h1>hello world</h1>
		</>
	);
}

const container = document.querySelector("#root");
if (container !== null) {
	const root = createRoot(container);
	root.render(<App />);
}
