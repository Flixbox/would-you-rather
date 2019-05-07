import React, { Component } from 'react'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'

import PieChart from 'react-minimal-pie-chart'
import { theme } from '../helpers/theme'

const styles = {
    main: {
        flex: '1 0 auto',
        width: '50%',
        height: `100%`,
        padding: '5px',
    },
    choseThisOption: {
        backgroundColor: theme.palette.secondary.main,
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

/**
 * This component represents a half of the currently displayed question.
 * This half contains an option text and, if answered, shows some data.
 *
 * @class Option
 * @extends {Component}
 */
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

        const choseThisOption = votes.includes(authedUser.id)
        const hasVoted = opposite.votes.includes(authedUser.id) || choseThisOption

        return (
            <Grid
                container
                className={classNames(
                    classes.main,
                    choseThisOption ? classes.choseThisOption : null
                )}
            >
                <Button
                    className={hasVoted ? classes.optionButtonVoted : classes.optionButton}
                    disabled={hasVoted}
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

    /**
     * This function examines the question's data and displays it in a nice way.
     *
     * @memberof Option
     */
    renderPieChart = () => {
        const { classes, votes, opposite } = this.props

        const votesThisOption = votes.length
        const votesOppositeOption = opposite.votes.length
        const totalVotes = votesOppositeOption + votesThisOption
        const percent = Math.round((votesThisOption / totalVotes) * 100)

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
                    totalValue={totalVotes}
                />
                <Typography variant="body1">{percent}%</Typography>
            </Grid>
        )
    }
}

const StyledOption = withStyles(styles)(Option)

export default StyledOption
