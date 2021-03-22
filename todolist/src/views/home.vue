<template>
    <h1>Home </h1>
    <sidebarItem ></sidebarItem>
    <div class="home" v-for="list in getTodoLists" :key="list.id">
        <ul>
            <li >
                <button @click="displayTodoList(list.name)" >{{list.name}}</button>
            </li>
        </ul>
        <TodoList v-show="showToDisplay" v-if="toDisplay==list.name" id ="list.name" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import sidebarItem  from '@/components/sidebarItem.vue'
    import TodoList from '@/components/TodoList.vue'
    
    export default {
        name: 'Home',
        components: {
            TodoList,
            sidebarItem
        },
        data(){
            return{
                showToDisplay:false,
                toDisplay : ''
            }
        },
        methods: {
            ...mapActions('todolist',['loadAllTodolists']),

             displayTodoList(id){
                 if(this.showToDisplay==false) this.showToDisplay=true
                 else this.showToDisplay = false

                  this.toDisplay = id
			},
        },
        created() {
            this.loadAllTodolists();
        },
        computed: {
            ...mapGetters('todolist',['getTodoLists'])
        },

        props:{
             msg:String
        }
    }
</script>
