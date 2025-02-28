import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalcontextProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalcontextProvider>
    <App />
  </GlobalcontextProvider>
);
