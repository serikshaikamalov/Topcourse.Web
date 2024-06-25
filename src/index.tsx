import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { HelmetProvider } from "react-helmet-async";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}></PersistGate>
        <App />
      </Provider>
    </BrowserRouter>
  </HelmetProvider>
);
reportWebVitals();
