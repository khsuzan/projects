import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./router.tsx";
import "./index.css";

const container = document.getElementById("root");
if (container === null) {
	throw new Error("Root container missing in index.html");
}
createRoot(container).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
