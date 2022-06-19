const SET_LOGIN_FORM = ' SET_LOGIN_FORM'
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialState = {
    isAuth: false,
    isLoginFormActive: false,
    usersList: [{id: 1, login: 'admin', password: 'admin', email:'admin@example.com', about:'Я администратор этого сайта'}, {id: 2, login: 'Andrew', password: 'qwerty', email:'andrew@example.com', about:'Я помощник администратора'},],
    authedID: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN_FORM:
            return {
                ...state,
                isLoginFormActive: action.value
            }
        default: return state
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                isLoginFormActive: false,
                authedID: action.authedID
            }
        case LOGOUT: 
            return {
                ...state,
                isAuth: false
            }

    }
}

export const setLoginForm = value => ({type: SET_LOGIN_FORM, value})
export const login = (authedID) => ({type: LOGIN, authedID})
export const logout = () => ({type: LOGOUT})

export default authReducer