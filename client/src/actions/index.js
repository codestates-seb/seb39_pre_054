export const LOGIN_INFO = "LOGIN_INFO" //action 타입
export const LOGOUT = "LOGOUT"

export const loginSuccess = (res) =>({
  type : LOGIN_INFO,
  payload : res
})

export const logout = () => ({
  type: LOGOUT,
})