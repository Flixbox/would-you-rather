import { combineReducers } from 'redux'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import currentQuestion from './currentQuestion'

export default combineReducers({
    authedUser,
    users,
    questions,
    currentQuestion,
})
