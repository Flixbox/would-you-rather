export const RETRIEVE_FILTERED_QUESTIONS = 'RETRIEVE_FILTERED_QUESTIONS'

export function retrieveFilteredQuestions(questions, filter, authedUser) {
    return {
        type: RETRIEVE_FILTERED_QUESTIONS,
        questions,
        filter,
        authedUser,
    }
}

export function handleRetrieveFilteredQuestions(questions, filter, authedUser) {
    return dispatch => {
        dispatch(retrieveFilteredQuestions(questions, filter, authedUser))
    }
}
