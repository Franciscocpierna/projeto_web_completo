<template>
  <div id="app" :class="{'hidden-menu': !isMenuVisible} ">
    <!-- Os componentes são importados no <script> e mapeados para as áreas do Grid no CSS -->
    <Header title="Cod3r - Base de conhecimento" 
	:hideToggle="true" 
	:hideUserDropdown="false"
	/> 
     
    <Menu /> 
    <Content /> 
    <Footer />
  </div>
</template>

<script>
// Importação dos componentes de template
import { mapState } from 'vuex'
import Header from '@/components/template/Header'
import Menu from '@/components/template/Menu'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'

export default {
  name: 'App',
  // Registro dos componentes para uso no <template>
  components: { 
    Header, 
    Menu, 
    Content, 
    Footer 
  },
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
/* Estilos globais e a definição do Grid, corrigida para usar apenas espaços */
* {
  font-family: 'Lato', sans-serif;
}

body {
  margin: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
        "header header"
        "menu content"
        "menu footer";
}

#app.hide-menu {
    
    grid-template-areas:
        "header header"
        "content content"
        "footer footer";
}
</style>