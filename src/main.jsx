import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

const rootElement = document.querySelector("#root");
const reactRoot = createRoot(rootElement);

reactRoot.render(<App />);
