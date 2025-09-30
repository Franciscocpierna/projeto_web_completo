<template>
    <div class="display">
        {{ value }}
    </div>
</template>

<script>
export default {
    // 🛑 CORREÇÃO: Adicionando um nome multi-palavra para satisfazer o ESLint.
    name: 'CalcDisplay', 
    props: ['value']
}
</script>

<style>
    .display {
        grid-column: span 4;
        background-color: #0004;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        font-size: 2.1em;
        overflow: hidden;
    }
</style>