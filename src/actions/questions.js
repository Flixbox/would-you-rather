import { saveQuestionAnswer } from '../helpers/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RETRIEVE_NEW_QUESTION = 'RETRIEVE_NEW_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

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

export function setQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleQuestionAnswer({ authedUser, qid, answer }) {
    return dispatch => {
        dispatch(setQuestionAnswer({ authedUser, qid, answer }))

        return saveQuestionAnswer({ authedUser: authedUser.id, qid, answer }).catch(e => {
            console.warn('Error in handleQuestionAnswer: ', e)
        })
    }
}
