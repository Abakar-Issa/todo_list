<template>
	<h1> SidebarItem </h1>

	<div id="sidebar" v-for="task in lists" :key="task.nom"> 
		<ul>
            <li >
                <router-link to="/sidebar.vue" >
                     {{task.nom}}
                </router-link>
            </li>
        </ul>
	</div>
	<div>
		<button @click="newList">Ajouter une liste </button>
	</div>
</template>

<script>
	export default  {
		name: 'SidebarItem',data () {
			return {
				lists:[{
					nom  : 'Liste 1',
					todolist : {
						name : 'tache 1',
						checked : false
					}
				}
				],
			}
		}
		,methods:{
			addList(x,text,check){
				this.todoList.push({
					nom : x,todolist : {
						name : text,checked : check
					}
				}
				)
			}
		}  
	}
</script>
