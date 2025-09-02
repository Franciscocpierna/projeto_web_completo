import Cabecalho from "@/components/cabecalho";
import Layout from "@/components/layout";

export default function  Exemplo(){
   
   return (
       <Layout titulo = 'Usando Components' >
        <Cabecalho  titulo = "Next.js & React" />
        <Cabecalho  titulo = "Aprende Next na prática" />

       </Layout>
       
   )
}