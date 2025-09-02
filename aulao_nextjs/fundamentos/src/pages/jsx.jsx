import Layout from '../components/Layout'

export default function  Jsx(){
    const a = 4
    const b = 3
    const titulo =  <h1>JSX é um conceito Central</h1>
   function subtitulo() {
    return <h2>{"Muito Legal".toUpperCase()}</h2>
   }
   return (
      <Layout titulo = "Entendendo o JSX">

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
      </Layout>
      
   )
}