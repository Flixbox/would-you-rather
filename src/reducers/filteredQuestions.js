import { RETRIEVE_FILTERED_QUESTIONS } from '../actions/filteredQuestions'

export default (state = {}, action) => {
    switch (action.type) {
        case RETRIEVE_FILTERED_QUESTIONS: {
            const { questions, filter, authedUser } = action
            let sortedQuestions = []
            for (const question in questions) {
                const votes = [
                    ...questions[question].optionOne.votes,
                    ...questions[question].optionTwo.votes,
                ]

                switch (filter) {
                    case 0:
                        // No filter
                        sortedQuestions.push(questions[question])
                        break
                    case 2:
                        // Answered only
                        if (votes.includes(authedUser.id)) {
                            sortedQuestions.push(questions[question])
                        }
                        break
                    default:
                        // Unanswered only
                        if (!votes.includes(authedUser.id)) {
                            sortedQuestions.push(questions[question])
                        }
                        break
                }
            }
            sortedQuestions.sort((a, b) => {
                return b.timestamp - a.timestamp
            })
            return sortedQuestions
        }
        default:
            return state
    }
}
