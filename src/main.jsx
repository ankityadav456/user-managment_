// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));   // notice the '!'
root.render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );