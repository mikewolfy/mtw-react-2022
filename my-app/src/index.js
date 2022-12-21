import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Stocks from './pages/Stocks';
import Allocation from './pages/Allocation';
import Layout from './pages/Layout';

// function Hello(props) {
//   return <h1>Hello World!</h1>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route index element = {< Stocks />} />
          <Route path="stocks" element={<Stocks/>} />
          <Route path="allocation" element ={<Allocation/>} />        
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();