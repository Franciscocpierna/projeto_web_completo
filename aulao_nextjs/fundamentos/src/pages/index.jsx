/*import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
*/
import Navegador from "@/components/navegador"
import Link from "next/link"

export default function  Inicio(){
   // return "Início 2"
   //return <h1>Título</h1>
   return (
      <div style= {{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexWrap: 'wrap',
         height: '100vh'
      }}>
        <Navegador texto='Estiloso' destino="/estiloso" />
        <Navegador texto='Exemplo' destino="/exemplo" cor='#ad3fdd' />
        <Navegador texto='JSX' destino="/jsx" cor='crimson'/>
        <Navegador texto='Navegação #01' destino="/navegacao" cor='green'/>
        <Navegador texto='Navegação #02' destino="/cliente/sp-2/321" cor='blue'/>
        <Navegador texto='Componente com Estado' destino="/estado" cor='pink'/>
        <Navegador texto='Integração com api #01' destino="/integracao_1" cor='yellow'/>
        <Navegador texto='Conteúdo Estático' destino="/estatico" cor='#fa054a'/>
      </div>
      
   )
}
