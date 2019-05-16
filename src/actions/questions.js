import { saveQuestionAnswer, saveQuestion } from '../helpers/api'

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

/**
 * Executed when the user submits a new answer that should be saved.
 * The data is saved in the store and in the backend.
 *
 * @export
 * @param {Object} { authedUser, qid, answer } The currently logged in user,
 *                  the question's id and either "optionOne" or "optionTwo".
 * @returns Undefined
 */
export function handleQuestionAnswer({ authedUser, qid, answer }) {
    return dispatch => {
        dispatch(setQuestionAnswer({ authedUser: authedUser.id, qid, answer }))

        return saveQuestionAnswer({ authedUser: authedUser.id, qid, answer }).catch(e => {
            console.warn('Error in handleQuestionAnswer: ', e)
        })
    }
}

/**
 * Executed when the user submits a new question that should be saved.
 * The data is saved in the store and in the backend.
 *
 * @export
 * @param {Object} { optionOne, optionTwo, author } The question's data.
 * @returns Undefined
 */
export function handleNewQuestion({ optionOne, optionTwo, author }) {
    return dispatch => {
        return saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author })
            .catch(e => {
                console.warn('Error in handleNewQuestion: ', e)
            })
            .then(formattedQuestion => {
                dispatch(receiveQuestions({ [formattedQuestion.id]: { ...formattedQuestion } }))
            })
    }
}
