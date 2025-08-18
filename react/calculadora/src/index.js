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

// Se você quiser começar a medir o desempenho em seu aplicativo,
// passe uma função para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou para enviá-los a um endpoint de análise.
// Saiba mais: https://bit.ly/CRA-vitals
// reportWebVitals();


