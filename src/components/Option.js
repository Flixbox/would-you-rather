import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveNewQuestion } from '../actions/questions'

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

import PieChart from 'react-minimal-pie-chart'

const styles = {
    main: {
        flex: '1 0 auto',
        width: '50%',
        height: `100%`,
        padding: '5px',
    },
    optionButton: {
        height: '100%',
        width: '100%',
        textTransform: 'none',
    },
    optionButtonVoted: {
        height: '50%',
        width: '100%',
        textTransform: 'none',
    },
}

class Option extends Component {
    render() {
        const {
            classes,
            authedUser,
            text,
            votes,
            option,
            handleQuestionAnswer,
            opposite,
        } = this.props

        const hasVoted = opposite.votes.includes(authedUser.id) || votes.includes(authedUser.id)

        return (
            <Grid container className={classes.main}>
                <Button
                    className={hasVoted ? classes.optionButtonVoted : classes.optionButton}
                    align="center"
                    onClick={() => handleQuestionAnswer(option)}
                >
                    <Grid container>
                        <Grid item xs={12} className={classes.answerContainer}>
                            <Typography variant="h3">{text}</Typography>
                        </Grid>
                        {hasVoted ? this.renderPieChart() : null}
                    </Grid>
                </Button>
            </Grid>
        )
    }

    renderPieChart = () => {
        const { classes, authedUser, text, votes, option, opposite } = this.props
        return (
            <Grid item xs={12} className={classes.chartContainer}>
                Pie chart
            </Grid>
        )
    }
}

const StyledOption = withStyles(styles)(Option)

export default StyledOption
