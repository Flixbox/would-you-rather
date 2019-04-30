export const RETRIEVE_NEW_QUESTION = 'RETRIEVE_NEW_QUESTION'

export function retrieveNewQuestion(authedUser) {
    console.log('Retrieving question!')
    return {
        type: RETRIEVE_NEW_QUESTION,
        authedUser,
    }
}

export function handleRetrieveNewQuestion(authedUser) {
    console.log('Handling retrieval!')
    return dispatch => {
        dispatch(retrieveNewQuestion(authedUser))
    }
}
