export function load(state, data) {
    console.log(data);
    state.Token = data
}


export function register(state, token){
    state.Token = token;
}


export function login(state, token){
    state.Token = token;

}

//logout ?
