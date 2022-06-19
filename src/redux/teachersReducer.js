const SET_ACTIVE = 'SET-ACTIVE'
const SET_ACTIVE_MODAL = 'SET_ACTIVE_MODAL'

const initialState = { 
    teachersInfo: [
        {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo1.png', id: 0, bio: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla."},
        {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo2.png', id: 1, bio: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla."},
        {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo3.png', id: 2, bio: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla."}
    ],
    isActive: false,
    activeModal: 0
}

const teachersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                isActive: action.bool,
            };
        case SET_ACTIVE_MODAL:
            return {
                ...state,
                activeModal: action.id,
            };
        default: return state
    }
}

export const setActive = (bool) => ({type: SET_ACTIVE, bool})
export const setActiveModal = id => ({type: SET_ACTIVE_MODAL, id})

export default teachersReducer