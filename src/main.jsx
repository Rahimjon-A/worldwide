import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import countries from "./store/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={countries}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/modal/:id" element={<Modal/>} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
