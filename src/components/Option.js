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
import { theme } from '../helpers/theme'

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
    chartContainer: {
        maxHeight: '50%',
    },
    chart: {
        // Limit the chart's width and height, otherwise the chart might go through the bottom of the viewport.
        maxWidth: '20vh',
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
                    </Grid>
                </Button>
                {hasVoted ? this.renderPieChart() : null}
            </Grid>
        )
    }

    renderPieChart = () => {
        const { classes, authedUser, text, votes, option, opposite } = this.props
        const votesThisOption = votes.length
        const votesOppositeOption = opposite.votes.length
        return (
            <Grid item xs={12} className={classes.chartContainer} align="center">
                <PieChart
                    className={classes.chart}
                    data={[
                        {
                            title: 'This option',
                            value: votesThisOption,
                            color: theme.palette.primary.main,
                        },
                    ]}
                    animate
                    label
                    labelStyle={{
                        fill: theme.palette.primary.contrastText,
                    }}
                    totalValue={votesOppositeOption + votesThisOption}
                />
            </Grid>
        )
    }
}

const StyledOption = withStyles(styles)(Option)

export default StyledOption
