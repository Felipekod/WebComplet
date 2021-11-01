import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Primeiro from './componentes/Primeiro'
import Bonjour from './componentes/Bonjour'

import {BoaTarde, BoaNoite} from './componentes/Multiplo'

ReactDOM.render(
  <div>
      <BoaTarde nom = 'Ana'/>
      <BoaNoite nom = 'Bia'/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
