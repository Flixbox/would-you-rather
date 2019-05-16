import { combineReducers } from 'redux'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import filter from './filter'
import filteredQuestions from './filteredQuestions'

export default combineReducers({
    authedUser,
    users,
    questions,
    filteredQuestions,
    filter,
})
