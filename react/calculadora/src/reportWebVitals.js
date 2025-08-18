// Define uma função chamada 'reportWebVitals' que recebe 'onPerfEntry' como argumento.
// 'onPerfEntry' é uma função que será chamada com os resultados da medição.
const reportWebVitals = onPerfEntry => {
  // Verifica se 'onPerfEntry' existe e se é uma função válida.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinamicamente a biblioteca 'web-vitals'.
    // Isso garante que a biblioteca só seja carregada quando necessário,
    // o que ajuda a otimizar o tempo de carregamento inicial da sua aplicação.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama a função 'getCLS' da biblioteca 'web-vitals' para obter a métrica
      // de estabilidade visual (Cumulative Layout Shift) e a reporta.
      getCLS(onPerfEntry);
      // Chama a função 'getFID' para obter a métrica de tempo de resposta
      // à primeira interação do usuário (First Input Delay).
      getFID(onPerfEntry);
      // Chama a função 'getFCP' para obter a métrica de tempo até o
      // primeiro conteúdo ser renderizado (First Contentful Paint).
      getFCP(onPerfEntry);
      // Chama a função 'getLCP' para obter a métrica de tempo até o
      // maior conteúdo da página ser renderizado (Largest Contentful Paint).
      getLCP(onPerfEntry);
      // Chama a função 'getTTFB' para obter a métrica de tempo até o
      // primeiro byte ser recebido do servidor (Time to First Byte).
      getTTFB(onPerfEntry);
    });
  }
};

// Exporta a função 'reportWebVitals' como a exportação padrão do arquivo.
// Isso permite que ela seja importada em outros arquivos, como o 'index.js'.
export default reportWebVitals;
