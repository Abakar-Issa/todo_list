<template>
    
	<h2>My Sidebar</h2>
	<div id="sidebar" v-for="task in this.lists" :key="task.nom"> 
		<ul>
            <li >
                <router-link to="/" >
                     {{task.nom}}
                </router-link>
            </li>
        </ul>
	</div>
    

</template>

<script>

import TodoList from './TodoList.vue';



export default {
        name: 'sidebar',
        components:{
        },
        
        data(){
            return {
            }
        },

        methods:{

        
        },
        props:{
        currentList:{type:TodoList}
        }

}

</script>