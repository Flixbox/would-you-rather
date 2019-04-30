export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RETRIEVE_NEW_QUESTION = 'RETRIEVE_NEW_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function retrieveNewQuestion(authedUser) {
    return {
        type: RETRIEVE_NEW_QUESTION,
        authedUser,
    }
}

export function handleRetrieveNewQuestion(authedUser) {
    return dispatch => {
        dispatch(retrieveNewQuestion(authedUser))
    }
}
