import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa a nova API
import './index.css';
import Calculator from './main/Calculator';
// Adicione estas duas linhas


import App from './App';
//import reportWebVitals from './reportWebVitals';

// O seu projeto foi criado com a sintaxe moderna. Use ela.
// Não é necessário o "registerServiceWorker", que é de versões antigas do CRA.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Calculator />
  
   );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


