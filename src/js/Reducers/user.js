import {  LOAD_USER,   REGISTER_USER } from "../Actionstypes/user"



const initialState = 
{
user : null , 
loadUser : false , 
errors: null , 
isAuth : false ,
userToGet : {} ,
success : null ,


}



const userReducer = ( state = initialState , {type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, loadUser : true}
        case REGISTER_USER:
            localStorage.setItem("token" , payload.token)    
      return   {...state,...payload }
        default:
            return state
    }
}


export default userReducer







