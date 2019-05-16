import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleQuestionAnswer } from '../actions/questions'

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
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
    avatar: {
        marginBottom: '5px',
        height: '20px',
        width: '20px',
    },
}

/**
 * This view renders a question and its data.
 * The prop "match.params.question" is the ID of the question that should be rendered (so the question is in the URL).
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
    getPreviousQuestion = (question, questions, filteredQuestions) => {
        if (!filteredQuestions) return null
        const currentId = filteredQuestions.indexOf(filteredQuestions[question])
        if (currentId <= 0) {
            // Link to current question
            return questions[question].id
        }
        return filteredQuestions[currentId - 1].id
    }

    /**
     * Returns the question after this one or the current question if this is the last question in the stack.
     *
     * @memberof Question
     */
    getNextQuestion = (question, questions, filteredQuestions) => {
        if (!filteredQuestions) return null
        const currentId = filteredQuestions.indexOf(questions[question])
        if (currentId >= filteredQuestions.length - 1) {
            // Link to current question
            return questions[question].id
        }
        return filteredQuestions[currentId + 1].id
    }

    render() {
        const { classes, authedUser, match, users, filteredQuestions } = this.props
        const { question } = match.params
        const { questions } = this.props.questions

        if (!question || !questions || !questions[question] || !filteredQuestions) {
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

        const { author, optionOne, optionTwo } = questions[question]

        const previousQuestion = this.getPreviousQuestion(question, questions)
        const nextQuestion = this.getNextQuestion(question, questions)

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
                        disabled={previousQuestion === question}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={`/leaderboard`}
                        label={author}
                        icon={
                            <Avatar
                                alt="avatar"
                                src={users[author].avatarURL}
                                className={classes.avatar}
                            />
                        }
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={`/questions/${nextQuestion}`}
                        label="Next"
                        icon={<FontAwesomeIcon icon={faArrowRight} className={classes.icon} />}
                        disabled={nextQuestion === question}
                    />
                </BottomNavigation>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, questions, filteredQuestions, filter, users }) {
    return {
        authedUser,
        questions,
        filteredQuestions,
        filter,
        users,
    }
}

const StyledQuestion = withStyles(styles)(Question)

export default connect(mapStateToProps)(StyledQuestion)
