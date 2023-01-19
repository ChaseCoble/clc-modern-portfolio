import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(configureStore);
const container = document.querySelector("#root");
const root = createRoot(container);
import "./main.scss";

function main() {
  root.render(
    <Provider store={createStoreWithMiddleware({reducer:rootReducer})}>
      <BrowserRouter>
        <App.jsx />
      </BrowserRouter>
    </Provider>
  );
}

document.addEventListener("DOMContentLoaded", main);