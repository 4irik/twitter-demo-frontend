import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import "flexboxgrid2";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
