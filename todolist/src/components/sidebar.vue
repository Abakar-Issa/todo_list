<template>
  <h2>Todolist </h2>
  <input type="text"  placeholder="ajouter une todolist" v-model="toCreateTodoList" @keyup.enter="newTodoList">  
  <br>


</template>

<script>

import { mapGetters, mapActions } from "vuex"
import TodoList from './TodoList.vue'

	export default  {
		name : "sidebarItem",
		data(){
			return{
				lists:[{
					id:"1",
					
				}
				],
				toCreateTodoList :'',
			}
		},
		props:{
			
		},
		components(){
			TodoList
		}
		
		,methods:{
			...mapActions("todolist",['delTodolist','createTodolist']),
           

			newTodoList(){
				this.createTodolist({
					name : this.toCreateTodoList ,
						
				})

				this.toCreateTodoList = ''
			},

			removeTodolist(todoList){
				this.delTodolist(todoList.id)
			}
		},
		computed:{
			...mapGetters('todolist', ['getTodoLists','getTodoList','getLength']),

			todolists(){
				return this.getTodoLists;
				},
			taille(){
				return this.getLength;
			}
				}
	}

</script>
