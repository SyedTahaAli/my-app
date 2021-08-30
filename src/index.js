import React from 'react';
import ReactDOM from 'react-dom';
import './cards.css';
import App from './App';
import Heading from './taha/Heading';
import Goodmorning from './taha/Goodmorning';
import Calculator, { Add, Sub, Div, Mul } from './taha/calc';

import Cards from './Cards'

import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <>
      <h1 className="heading_style">This is Card List</h1>

      <Goodmorning />
      {/* <App /> */}
      {/* <Heading /> */}
      {/* <ul>
        <li>Sum of Two Number {Add(10, 10)}</li>
        <li>Subtract of Two Number {Sub(50, 10)}</li>
        <li>Multiply of Two Number {Mul(90, 10)}</li>
        <li>Division of Two Number {Div(100, 10)}</li>
      </ul> */}


      <Cards />




    </>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
