const _ = require('lodash');
setInterval (() => {
    console.log(_.random(1, 1000)) // imprime um numero aleatorio entre 1 e 1000
}, 2000); // executa a cada 2 segundo