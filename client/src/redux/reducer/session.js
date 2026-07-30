import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id:"",
    token:""
}

const session = createSlice({
    name:"session",
    initialState,
    reducers:{
        userLogin:function(state, action){
            state.id = action.payload.id
            state.token = action.payload.token
        },
        userLogout:function(state, action){
            state.id = ""
            state.token = ""
        }
    }
})

export default session.reducer
export const {userLogin, userLogout} = session.actions