const SHOW_PROFILE = "SHOW_PROFILE"

const initialState = {
    isProfileShown: false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_PROFILE: 
        return {
            ...state, 
            isProfileShown: true
        }
        default: return state
    }
}

export const showProfile = () => ({type: SHOW_PROFILE})

export default profileReducer