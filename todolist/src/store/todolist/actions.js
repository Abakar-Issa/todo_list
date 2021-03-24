import axios from 'axios';


//pour creer un todoList sur l'api
export function createTodolist({ commit, rootGetters }, payload) {
    var token = rootGetters["account/getToken"];
  
    axios
      .post("http://138.68.74.39/api/todolist", payload, {
        headers: {"Content-Type":"appliaction/json" ,
         "Authorization": "Bearer " + token },
      })
      .then(response => {
          console.log("reussi ");
        commit("addTodolist",response.data);
      })
      .catch(error => {
        console.log(error.response)
    });
  }

  //pour creer un todo
  export function createTodo({ commit, rootGetters }, payload) {
    var token = rootGetters["account/getToken"];

    axios.post("http://138.68.74.39/api/todo", payload, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(response => {

        console.log("reussi");
        commit("addTodo", response.data);
      })
      .catch(error =>{
        console.log(error.response)
    }
    );
  }

  //supprimer un todo
  export function delTodo({ commit, rootGetters }, payload) {
    let token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todo/"+payload.id, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function() {

        commit("deleteTodo", payload);
      })
      .catch(error =>{
          console.log(error.response)
      }
      );
  }
  export function delTodoList({ commit, rootGetters }, id) {
    var token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todolist/"+id, {
        headers: {
        "Content-Type":"appliaction/json" ,
         Authorization: "Bearer " + token },
      })
      .then(() => {

        commit("deleteTodolist", id);
      })
      .catch(error => {
        console.log(error.response)
    });
  }


  export function loadAllTodolists({ commit, rootGetters }) {
    var token = rootGetters["account/getToken"];
    console.log(token);
  
    axios
      .get("http://138.68.74.39/api/todolists", {
        headers: { "Content-Type":"appliaction/json" ,
         Authorization: "Bearer " + token },
      })
      .then(response =>  {
        commit("load", response.data);
      })
      .catch(error => {
        console.log(error.response)
    });
  }

  