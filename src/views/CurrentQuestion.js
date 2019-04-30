import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion } from '../actions/questions'

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
    main: {},
    option: {
        flex: '1 0 auto',
        width: '50%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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

    render() {
        const { classes } = this.props
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
                <div className={classes.main}>
                    <div className={classNames(classes.option, classes.optionOne)} />
                    <div className={classNames(classes.option, classes.optionTwo)} />
                </div>
                <BottomNavigation showLabels className={classes.footer}>
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

function mapStateToProps({ authedUser, questions, currentQuestion }) {
    return {
        authedUser,
        questions,
    }
}

const StyledCurrentQuestion = withStyles(styles)(CurrentQuestion)

export default connect(mapStateToProps)(StyledCurrentQuestion)
