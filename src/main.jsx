import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalcontextProvider } from "./context/GlobalContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalcontextProvider>
    <App />
    <ToastContainer limit={3} />
  </GlobalcontextProvider>
);
