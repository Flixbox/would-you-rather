import { handleRetrieveFilteredQuestions } from './questions'

export const SET_FILTER = 'SET_FILTER'

export function setFilter(id = 1) {
    return {
        type: SET_FILTER,
        id,
    }
}

export function handleFilterChange({ id = 1, questions, authedUser }) {
    return dispatch => {
        dispatch(setFilter(id))
        dispatch(handleRetrieveFilteredQuestions(questions, id, authedUser))
    }
}
