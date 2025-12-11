<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <!-- As classes 'fa' e 'fas' são essenciais para carregar o ícone na v5 -->
            <i class="fa fa-lg fas" :class="icon"></i>
        </a>
        
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link>
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            // Lógica correta para alternar ícone
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        },
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
/* Indentação limpa com 4 espaços */
.header {
    grid-area: header;
    background: linear-gradient(to right, #1e469a, #49a7c1);

    display: flex;
    justify-content: center;
    align-items: center;
}
 .fa, .fas, .far, .fab {
        /* Define explicitamente a fonte correta para os ícones */
        font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands' !important;
        /* Garante que os ícones funcionem */
        font-weight: 900;      
   }     
.title {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
}

.title a {
    color: #FFF;
    text-decoration: none;
}

.title a:hover {
    color: #FFF;
    text-decoration: none;
}

header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
}

header.header > a.toggle:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>