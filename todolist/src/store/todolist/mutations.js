
export function load(state, data) {
    //console.log(data);
    state.sidebar = data
}


export function addTodo(state, response){
    var todolist = state.sidebar.find((todolist) => todolist.id === response.id);
    todolist.todos.push({
        todolist_id : response.todolist_id,
        name : response.name,
        completed: '0'
    })
}


export function deleteTodo(state,payload){
    var todolist = state.todoList.find((todolist) => todolist.id === payload.id);
   // var i = todolist.todos.map(item => item.id).indexOf(payload.id);
    //todolist.todos.splice(i, 1);
    state.todoList = state.todoList.filter(todo => todo.todolist_id !== todolist.id);
}

export function addTodolist(state,response){
    state.sidebar.push({
        name: response.name,
        id : response.todolist_id
    })

}

export function deleteTodolist(state,id){
    
    state.sidebar =  state.sidebar.filter(todolist => todolist.id !== id)
}



