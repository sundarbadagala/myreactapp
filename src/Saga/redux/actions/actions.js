import * as acitonTypes from './actionTypes'

export const buyMobile=()=>{
 return{
        type: acitonTypes.BUY_MOBILE
    }   
}
export const sellMobile=()=>{
    return{
        type: acitonTypes.SELL_MOBILE
    }
}


export const usersList=()=>{
    return{
        type: acitonTypes.USERS_LIST
    }
}

export const getAllUsers=()=>{
    return{
        type:acitonTypes.GET_ALL_USERS
    }
}

export const getSingleUser=(id)=>{
    return{
        type: acitonTypes.GET_SINGLE_USER,
        id
    }
}

export const addUser=(payload)=>{
    return{
        type: acitonTypes.ADD_USER,
        payload
    }
}

export const editUser=(payload, id)=>{
    return{
        type: acitonTypes.EDIT_USER,
        payload,
        id
    }
}

export const deleteUser=(id)=>{
    return{
        type: acitonTypes.DELETE_USER,
        id
    }
}


export const fetchData=()=>{
    return{
        type: acitonTypes.SEND_REQUEST,
    }
}
export const fetchDataSuccess=(users)=>{
    return{
        type: acitonTypes.SEND_REQUEST_SUCCESS,
        payload:users
    }
}
export const fetchDataFail=(error)=>{
    return{
        type: acitonTypes.SEND_REQUEST_FAIL,
        payload: error
    }
}

export const addTodo=(todo)=>{
    //console.log('action', todo)
    return{
        type: acitonTypes.ADD_TODO,
        payload:todo
    }
}
export const deleteTodo=(id)=>{
    return{
        type: acitonTypes.DELETE_TODO,
        payload:id
    }
}