import styles from '../styles/Estiloso.module.css'
import Layout from '../components/layout'

export default function Estiloso(){
   return(
    <Layout titulo = 'Exemplo de css modularizado' > 
        <div className = {styles.roxo} >
          
          <h1>Estilo usando CSS Módulos</h1>
        </div>
    </Layout>    
    
   ) 
}