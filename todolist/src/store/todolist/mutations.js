
export function load(state, data) {
    //console.log(data);
    state.sidebar = data
}


export function addTodo(state, response){

    var todolist = state.todoList.find((todolist) => todolist.id === response.id);
    todolist.todos.push({
        todolist_id : response.todolist_id,
        name : response.name,
        checked: false
    })
}


export function deleteTodo(state,payload){
    var todolist = state.todoList.find((todolist) => todolist.id === payload.id);
    var i = todolist.todos.map(item => item.id).indexOf(payload.id);
    todolist.todos.splice(i, 1);
}

export function addTodolist(state,response){
    state.sidebar.push({
        name: response.name,
        id : response.todolist_id
    })

}

export function deleteTodolist(state,id){
   /* var i = state.todoList.map(item => item.id).indexOf(id);
    state.todoList.splice(i, 1);*/
   state.sidebar.lists =  this.lists.filter(todolist => todolist.id !== id)
}


export function editTodo(state,payload){
    var todolist = state.todoList.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === payload.todo_id).name = payload.name;
}




