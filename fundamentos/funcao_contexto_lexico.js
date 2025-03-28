const valor = 'Global'
function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()
function exec(){
    const valor = 'local'
    console.log()
    minhaFuncao()
}
exec()