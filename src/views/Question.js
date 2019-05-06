import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
        const { dispatch, authedUser, question } = this.props

        dispatch(handleQuestionAnswer({ authedUser, qid: question, answer: option }))
    }

    render() {
        const { classes, authedUser, question } = this.props
        const { questions } = this.props.questions

        if (!question) {
            return (
                <Grid container justify="center" alignItems="center" className={classes.main}>
                    <Typography variant="h1">Loading question...</Typography>
                    <Typography variant="body1">
                        If this stays up long enough for you to read it, question {question}{' '}
                        probably doesn't exist.
                    </Typography>
                </Grid>
            )
        }

        const { id, author, optionOne, optionTwo } = questions[question]

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
                        label="Previous"
                        icon={<FontAwesomeIcon icon={faArrowLeft} className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        label={author}
                        icon={<FontAwesomeIcon icon={faUser} className={classes.icon} />}
                    />
                    <BottomNavigationAction
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
