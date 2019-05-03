import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion, handleQuestionAnswer } from '../actions/questions'

import Option from '../components/Option'

import { navHeight } from '../helpers/theme'
import classNames from 'classnames'
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
}

class CurrentQuestion extends Component {
    componentDidMount = () => {
        const { currentQuestion } = this.props.questions

        if (!currentQuestion) {
            this.retrieveNewQuestion()
        }
    }

    retrieveNewQuestion = () => {
        const { dispatch, authedUser } = this.props

        dispatch(handleRetrieveNewQuestion(authedUser))
    }

    handleQuestionAnswer = option => {
        const { dispatch, authedUser } = this.props
        const { currentQuestion } = this.props.questions

        dispatch(handleQuestionAnswer({ authedUser, qid: currentQuestion, answer: option }))
    }

    render() {
        const { classes, authedUser } = this.props
        const { currentQuestion, questions } = this.props.questions

        if (!currentQuestion) {
            return (
                <Grid container justify="center" alignItems="center" className={classes.main}>
                    <Typography>Loading question...</Typography>
                </Grid>
            )
        }

        const { id, author, optionOne, optionTwo } = questions[currentQuestion]

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
                    />
                    <Option
                        {...optionTwo}
                        option="optionTwo"
                        handleQuestionAnswer={this.handleQuestionAnswer}
                        authedUser={authedUser}
                    />
                </Grid>
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="Previous"
                        icon={<FontAwesomeIcon icon={faArrowLeft} />}
                    />
                    <BottomNavigationAction
                        label={author}
                        icon={<FontAwesomeIcon icon={faUser} />}
                    />
                    <BottomNavigationAction
                        label="Next"
                        icon={<FontAwesomeIcon icon={faArrowRight} />}
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

const StyledCurrentQuestion = withStyles(styles)(CurrentQuestion)

export default connect(mapStateToProps)(StyledCurrentQuestion)
