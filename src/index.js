import React from "react";
import ReactDOM from "react-dom/client";

import storeInstance from "./Store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export const StoreContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StoreContext.Provider value={storeInstance}>
        <App />
    </StoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
