<template>
  <section >
    <sidebarItem ></sidebarItem>
    <div class="home" v-for="todolist in todolists" :key="todolist.id">
        <ul >
            <li >
                <label @click="displayTodoList(todolist.name)" >{{todolist.name}}</label>
            </li>
        </ul>
        <TodoList  v-show="showToDisplay" v-if="toDisplay==todolist.name" :id="todolist.name"  />
        <button v-show="showToDisplay" v-if="toDisplay==todolist.name" @click="removeTodolist(todolist.id)" >Supprimer</button>
    </div>
   </section>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import sidebarItem  from '@/components/sidebar.vue'
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
            ...mapActions('todolist',['loadAllTodolists','delTodoList']),
            removeTodolist(Id){
                this.delTodoList(Id);
                },
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
            ...mapGetters('todolist',['getTodoLists']),
            todolists(){
                return this.getTodoLists;
            }

        },

        props:{
             msg:String
        }
    }
</script>
