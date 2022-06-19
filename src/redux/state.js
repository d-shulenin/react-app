import contactsReducer from './contactsReducer'

let store = {
    _state: {
        teachers: { 
            teachersInfo: [
                {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo1.png'},
                {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo2.png'},
                {name: 'Дмитрий Иванов', discription: 'Специалист по видеокартам', src: 'Teachers/photo3.png'}
            ],
        },
        contacts: {
            questions: [],
            newQuestionText: ""
        },
    },
    getState() {
        return this._state
    },
    _renderTree () {},
    askQuestion(question) {
        let newQuestion = {
            user: "User",
            date: "21.11.2021 0:53",
            content: question,
        }
        this._state.contacts.questions.push(newQuestion)
        this._renderTree(this._state)
    },
    questionTextUpdate(text) {
        this._state.contacts.newQuestionText = text
        this._renderTree(this._state)
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    dispatch(action) {
        this._state.contacts = contactsReducer(this._state.contacts, action)
        this._renderTree(this._state)
    }
}

export default store