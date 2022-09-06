import { LOGIN_INFO, LOGOUT } from "../actions/index.js"

const initialstate = {

  isLogin : false,
}
const loginReducer = (state = initialstate , action) =>{
  switch(action.type){
    case LOGIN_INFO :
      return {
        isLogin : true,
        ...action.payload
      }
    case LOGOUT:
      return{
        isLogin: false
      }
    default : 
      return state;
  }
}
export default loginReducer