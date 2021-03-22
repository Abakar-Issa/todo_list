import axios from 'axios';

export function signUp(store, payload){

    axios.post("http://138.68.74.39/api/register",payload)
    .then(function (response) {
      console.log("j'ai reussi ");
      store.commit("register", response.data.token);
    })
    .catch(
        function (error) {
            // handle error
            console.log(error);
          })
    .then(function () {
            // always executed
         });
  }

export function signIn(store, payload){
    axios
    .post("http://138.68.74.39/api/login",payload)
    .then(function (response) {

      console.log(response.data);
      store.commit("login", response.data.token);
    })
    .catch(
        function (error) {
            // handle error
            console.log(error);
          })
    .then(function () {
            // always executed
          });
  }
