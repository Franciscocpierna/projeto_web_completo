/*for(var i = 0; i < 10; i++) {
    console.log(i)
}
console.log("valor de i fora do for = "+ i)

// usando let no loop

for(let j = 0; j < 10; j++) {
    console.log(j)
}
console.log("let fora do for = "+ j) */




const funcs = []   //com let mostra o valor exato de i
for (let i=0;i<10;i++){
    funcs.push(function(){
       console.log(i)

    })
}
funcs[2]()
funcs[8]()
// com var mostra 10 sempre
const funcs1 = []
for (var i=0;i<10;i++){
    funcs1.push(function(){
       console.log(i)

    })
}
funcs1[4]()
funcs1[8]()