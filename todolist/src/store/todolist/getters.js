//pour recuperer tout les todoLists
export function getTodoLists(state) {
    return state.sidebar;
}

export function getLength(state){
    return state.sidebar.length
}

//pour recuperer un todolist avec son id
export const getTodoList = (state) => (id) => {
    return state.sidebar.find((list) => list.id === id);
}

//pour recuperer les todos d'un todolist
export const getTodos = (state) =>  (todoListId) => {
    var todolist = state.sidebar.find((todolist) => todolist.id === todoListId);
    //var todo = todolist.todos.find((todo) => todo.id === todoId);
    return todolist.todos;
}
