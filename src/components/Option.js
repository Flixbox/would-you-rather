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
}

class Option extends Component {
    render() {
        const { classes, authedUser, text, votes, option, handleQuestionAnswer } = this.props
        return (
            <Grid container className={classes.main}>
                <Button
                    className={classes.optionButton}
                    align="center"
                    onClick={() => handleQuestionAnswer(option)}
                >
                    <Typography variant="h3">{text}</Typography>
                    {votes.includes(authedUser) ? this.renderPieChart : null}
                </Button>
            </Grid>
        )
    }

    renderPieChart = () => {
        return <div>Pie chart</div>
    }
}

const StyledOption = withStyles(styles)(Option)

export default StyledOption
