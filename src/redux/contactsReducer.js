import * as axios from 'axios'

const ASK_QUESTION = 'ASK-QUESTION'
const QUESTION_TEXT_UPDATE = 'QUESTION-TEXT-UPDATE'
const SET_QUESTIONS = 'SET-QUESTIONS'
const SET_PAGE = 'SET-PAGE'
const IS_FETCHING = 'IS-FETCHING'

const initialState = {
    questions: [],
    newQuestionText: "",
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ASK_QUESTION:
            return {
                ...state, 
                newQuestionText: "",
                questions: [...state.questions, 
                    {
                    user: action.user,
                    date: action.date,
                    content: action.question,
                    }],
                totalCount: action.totalCount + 1,
            }
        case QUESTION_TEXT_UPDATE:
            return {
                ...state,
                newQuestionText: action.text
            }
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.questions.map(question => ({
                    user: "User",
                    date: "01.01.2022",
                    content: "Сколько стоит " + question.name + "?",
                })),
                totalCount: action.questions.length
            } 
        case SET_PAGE: 
            return {
                ...state,
                currentPage: action.value
            }
        case IS_FETCHING: 
            return {
                ...state, 
                isFetching: action.isFetching
            }
        default: return state
    }
}

export const askQuestion = (user, question, date, totalCount) => ({ type: ASK_QUESTION, user, question, date, totalCount })
export const questionTextUpdate = text => ({ type: QUESTION_TEXT_UPDATE, text })
export const setQuestions = questions => ({type: SET_QUESTIONS, questions})
export const setPage = value => ({type: SET_PAGE, value})
export const setFetching = isFetching => ({type: IS_FETCHING, isFetching: isFetching})
export const getQuestions = (options) => {
 return dispatch => {
    dispatch(setFetching(true));
    axios.request(options).then((responce) => {
      dispatch(setFetching(false));
      dispatch(setQuestions(responce.data.data.coins.slice(0, 24)));
    });
}
}

export default contactsReducer