import { LOGIN_INFO } from "../actions/index.js"

const initialstate = {

  isLogin : false,
}
const loginReducer = (state = initialstate , action) =>{
  switch(action.type){
    case LOGIN_INFO :
      return {
        isLogin : !state.isLogin,
        ...action.payload
      }
    default : 
      return state;
  }
}
export default loginReducer