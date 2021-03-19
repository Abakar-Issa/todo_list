<template>
    <h1>un home</h1>
    <div class="home">
        
        <ul>
            <li v-for="todo in todos" :key="todo.name">
                Bonjour
                {{todo.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    //import  TodoList from '../components/TodoList.vue';

    export default {
        name: 'Home',
        components: {
            //TodoList
        },
        methods: {
            ...mapActions(['load']),
        },
        created() {
            this.load()
        },
        computed: {
            ...mapGetters(['todos'])
        },

        props:{
             msg:String
        }
    }
</script>
