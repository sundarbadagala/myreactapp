import * as actionTypes from '../actions/actionTypes'

const initialState={
    todo:'',
    todos:[]
}

export const todoReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TODO_SUCCESS:
            const data = [...state.todos, {id:Date.now(), todo:action.todo}]
            return{
                ...state,
                todos:data
            }
        case actionTypes.DELETE_TODO_SUCCESS:
            // console.log('reducer', action.id)
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            }
        default:
            return state
    }

}