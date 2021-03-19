export function todos(state) {
    console.log("les todos : " + state.sidebar  )
    return state.sidebar;
}


export const getTodo = (state) => (name) => {
    return state.sidebar.find((todo) => todo.name === name);
}