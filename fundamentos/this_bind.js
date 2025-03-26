const pessoa = {
    saudacao:  'bom dia',
    falar(){
        console.log(this.saudacao)
    }


}

pessoa.falar()
const falar = pessoa.falar()
//falar()//conflito
const falarpessoa = pessoa.falar.bind(pessoa)
falarpessoa()
function pessoa1()  {
    this.idade = 0 
    const self = this 
    setInterval(function() {
      self.idade++
      console.log(self.idade)   
      
    }/*.bind(this)*/, 1000)


}

new pessoa1