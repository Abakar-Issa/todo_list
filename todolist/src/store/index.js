import {createStore} from 'vuex'

import todolist from './todolist';


export default createStore({
    debug : true,
    modules: {
        todolist
      },
  })