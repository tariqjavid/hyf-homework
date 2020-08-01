import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import todoList from "./Todolist";
ReactDom.render(<App tList={todoList} />, document.getElementById("root"));
