import mutations from './mutations.js'

import getters from './getters.js'

import actions from './actions.js'

let initState = null;

try{
    initState = JSON.parse(localStorage.getItem('auth'));
}
catch (e) {
    initState = {
        user: null,
        token: null
    }
}


export default {
    state: initState,
    getters,
    mutations,
    actions
}
