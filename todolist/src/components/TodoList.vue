<template>

  <section class="todo-list">
    <header class="header">

      <h1>My TodoList</h1>
      <input type="text" class="new-task" placeholder="ajouter une tache" v-model="newTodo" @keyup.enter="addTask">

    </header>

    <div class="main">

      <ul class="todos">
        <li class="todo" v-for="todo in filteredTodos" :key="todo.name" :class="{completed:todo.checked, editing : todo === newText}">

           <div class="view">

              <input type="checkbox" v-model="todo.checked" class="toggle">
              <label @dblclick="modifyTask(todo)"> {{todo.name}} </label>
              <button class="destroy" @click.prevent="deleteTask(todo)"></button>

           </div>

           <input class="edit" type="text" v-model="todo.name" @keyup="doneEdit">


        </li>
      </ul>

    </div>

    <footer class="footer" >
        <span class="todo-count"><strong>{{remaining}}</strong> tâches à faire </span>


        <ul class = "filters">

          <li> <a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'" > Toutes</a></li>

          <li> <a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo' " > A faire </a></li>

          <li> <a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'" > Faites</a></li>


        </ul>

    </footer>

  </section>
  
</template>

<script>

export default {

  data(){
     return{

      todos:[{
      
        name:'tache 1',
        checked:false
      }],

      newTodo:'',
      filter:'all',
      newText : null,
      toModify:false


      }
      
  },

  props:{
        listName:String
      },


  methods:{

    addTask(){
      this.todos.push({
        name:this.newTodo,
        checked:false
      })

      this.newTodo = ''
    },

    deleteTask(task){

       this.todos = this.todos.filter(todo => todo !== task)
    },

    modifyTask(task){

        if(this.toModify==true) this.toModify=false
        else this.toModify = true


        this.newText = task

    },

    doneEdit(){
      this.newText = null
    }
  },
  
  computed:{
  remaining(){
    return this.todos.filter(todo => !todo.checked).length
  },

  filteredTodos(){

    if(this.filter === 'todo'){
        return this.todos.filter(todo => !todo.checked)
      }
    else if(this.filter === 'done'){
         return this.todos.filter(todo => todo.checked)
    }

    return this.todos
   }

  }



}
 
</script>

<style src="./todo.css"></style>


