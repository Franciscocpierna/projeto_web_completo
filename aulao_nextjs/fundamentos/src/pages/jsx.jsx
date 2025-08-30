export default function  Jsx(){
    const a = 4
    const b = 3
    const titulo =  <h1>JSX é um conceito Central</h1>
   function subtitulo() {
    return <h2>{"Muito Legal".toUpperCase()}</h2>
   }
   return (
      <div>
         {titulo}
        {a + b}
        <br />
        <br />
        {Math.random()}
        <br />
        {a*b}
        <br />
        {subtitulo()}
       <br />
       <p>
        {JSON.stringify({nome: "joao", idade:  30})}
       </p>
      </div>
   )
}