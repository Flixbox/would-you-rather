import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleRetrieveNewQuestion, handleQuestionAnswer } from '../actions/questions'

import Option from '../components/Option'

import { navHeight } from '../helpers/theme'
import { withStyles } from '@material-ui/core/styles'
import {
    Typography,
    Button,
    Avatar,
    Grid,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'

const styles = {
    main: {
        // The height of the two navbars and the heading is 3xnavHeight
        height: `calc(100% - ${navHeight * 3}px)`,
    },
    option: {
        flex: '1 0 auto',
        width: '50%',
        height: `100%`,
    },
    questionContainer: {
        width: '100%',
        padding: '5px',
        height: `${navHeight}px`,
    },
    icon: {
        marginBottom: '5px',
    },
}

/**
 * This view renders a question and its data.
 * The prop "question" is the ID of the question that should be rendered.
 *
 * @class Question
 * @extends {Component}
 */
class Question extends Component {
    handleQuestionAnswer = option => {
        const { dispatch, authedUser, match } = this.props
        const { question } = match.params

        dispatch(handleQuestionAnswer({ authedUser, qid: question, answer: option }))
    }

    /**
     * Returns the question before this one or the current question if this is the first question in the stack.
     *
     * @memberof Question
     */
    getPreviousQuestion = (question, questions) => {
        const questionArray = this.getQuestionArray(questions)
        const currentId = questionArray.indexOf(questions[question])
        if (currentId <= 0) {
            // Link to current question; TODO disable button instead
            return questions[question].id
        }
        return questionArray[currentId - 1].id
    }

    /**
     * Returns the question after this one or the current question if this is the last question in the stack.
     *
     * @memberof Question
     */
    getNextQuestion = (question, questions) => {
        const questionArray = this.getQuestionArray(questions)
        const currentId = questionArray.indexOf(questions[question])
        if (currentId >= questionArray.length - 1) {
            // Link to current question; TODO disable button instead
            return questions[question].id
        }
        return questionArray[currentId + 1].id
    }

    /**
     * Sorts the given object by its timestamp and returns an array.
     *
     * @memberof Question
     */
    getQuestionArray = questions => {
        let questionArray = []
        for (const question in questions) {
            questionArray.push(questions[question])
        }
        questionArray.sort((a, b) => {
            return a.timestamp - b.timestamp
        })
        return questionArray
    }

    render() {
        const { classes, authedUser, match } = this.props
        const { question } = match.params
        const { questions } = this.props.questions

        if (!question || !questions[question]) {
            return (
                <Grid container justify="center" alignItems="center" className={classes.main}>
                    <Typography variant="h1">Loading question...</Typography>
                    <Typography variant="body1">
                        If this text stays up long enough for you to read it, question "{question}"
                        probably doesn't exist.
                    </Typography>
                    <Link to="/">
                        <Button>Take me back!</Button>
                    </Link>
                </Grid>
            )
        }

        const { id, author, optionOne, optionTwo } = questions[question]

        const previousQuestion = this.getPreviousQuestion(question, questions)
        const nextQuestion = this.getNextQuestion(question, questions)

        // TODO Add avatar
        return (
            <Fragment>
                <div className={classes.questionContainer}>
                    <Typography variant="h3" align="center">
                        Would you rather...
                    </Typography>
                </div>
                <Grid container className={classes.main}>
                    <Option
                        {...optionOne}
                        option="optionOne"
                        handleQuestionAnswer={this.handleQuestionAnswer}
                        authedUser={authedUser}
                        opposite={optionTwo}
                    />
                    <Option
                        {...optionTwo}
                        option="optionTwo"
                        handleQuestionAnswer={this.handleQuestionAnswer}
                        authedUser={authedUser}
                        opposite={optionOne}
                    />
                </Grid>
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        component={Link}
                        to={`/questions/${previousQuestion}`}
                        label="Previous"
                        icon={<FontAwesomeIcon icon={faArrowLeft} className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        label={author}
                        icon={<FontAwesomeIcon icon={faUser} className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={`/questions/${nextQuestion}`}
                        label="Next"
                        icon={<FontAwesomeIcon icon={faArrowRight} className={classes.icon} />}
                    />
                </BottomNavigation>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    }
}

const StyledQuestion = withStyles(styles)(Question)

export default connect(mapStateToProps)(StyledQuestion)
