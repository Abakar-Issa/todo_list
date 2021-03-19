import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://138.68.74.39/api/',
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
        "Authorization" : 'Bearer { token }' /*+ getAuthToken()*/
    }
});
export function load({ commit }){
    //axios.get('http://138.68.74.39/api/todos')
    httpClient.get('todos')
            .then(response => {
                commit("load", response.data);
            })

}