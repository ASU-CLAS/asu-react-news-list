import "./index.css";
import News from "./News";
import "@asu/unity-bootstrap-theme/dist/css/unity-bootstrap-theme.css";
import { createRoot } from "react-dom/client";

let domNode = document.getElementById("clas-news-react-base");

const root = createRoot(domNode);

root.render(<News data={domNode.dataset} />);
