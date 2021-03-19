<template>
    <SidebarItem />
    <TodoList listName="todolist" />
    <router />
    <router-link to="/"> Home</router-link>
    <router-view></router-view>
</template>

<script>
import SidebarItem from './components/sidebarItem.vue'
import TodoList from './components/TodoList.vue'
import router from './router'



export default {
  name: 'App',
  components: {
    TodoList,
    SidebarItem,
    router
  }
}
</script>


