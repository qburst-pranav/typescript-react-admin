import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "typeface-roboto";

import App from "./components/App";
import configureStore from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
