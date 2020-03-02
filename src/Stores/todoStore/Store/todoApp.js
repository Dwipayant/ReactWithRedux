import ADD_TODO from '../action-types/action-type';

const initialState = {
    todos:[]
}

function todoApp(state=initialState, action) {
    if (action.type === 'ADD_TODO') {
        addTodo(state, payload);
    }
    return state;
}

function addTodo(state, payload) {
    return state.todos = payload;
}