/*import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
*/
import Link from "next/link"

export default function  Inicio(){
   // return "Início 2"
   //return <h1>Título</h1>
   return (
      <div>
        <Link href = "/estiloso"> 
           Estiloso
        </Link>
      </div>
   )
}
