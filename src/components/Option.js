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
        const { classes, questions, text, votes, option } = this.props
        return (
            <Grid container className={classes.main}>
                <Button className={classes.optionButton} align="center">
                    <Typography variant="h3">{text}</Typography>
                </Button>
            </Grid>
        )
    }
}

function mapStateToProps({ authedUser, questions, currentQuestion }) {
    return {
        authedUser,
        questions,
    }
}

const StyledOption = withStyles(styles)(Option)

export default connect(mapStateToProps)(StyledOption)
