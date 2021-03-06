import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/questions'

import { Grid, TextField, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    main: {
        width: '100%',
        margin: 0,
    },
}

/**
 * This form allows the user to create a new question.
 * Workflow:
 * - User creates question
 * - User submits question
 * - User is redirected to CurrentQuestion
 * - Question is saved in the backend
 * - Question is saved in the redux store
 *
 * @class NewQuestion
 * @extends {Component}
 */
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    /**
     * Triggered when the user types something.
     * This updates the state and in turn updates the value of the given input field.
     *
     * @memberof NewQuestion
     */
    updateOption = (option, text) => {
        this.setState(prevState => {
            return { ...prevState, [option]: text }
        })
    }

    /**
     * Triggered when the "Submit" button is clicked.
     * The workflow is noted in the class description.
     *
     * @memberof NewQuestion
     */
    submit = () => {
        const { optionOne, optionTwo } = this.state
        const { authedUser, dispatch } = this.props
        dispatch(handleNewQuestion({ optionOne, optionTwo, author: authedUser.id }))
        // Redirect to main page
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container justify="center" spacing={24} className={classes.main}>
                <Grid item xs={10}>
                    <Typography variant="h3" align="center">
                        Would you rather...
                    </Typography>
                </Grid>

                <Grid item xs={10}>
                    <TextField
                        required
                        id="optionOne"
                        name="optionOne"
                        label="Option 1"
                        fullWidth
                        autoComplete="optionOne"
                        onChange={e => this.updateOption('optionOne', e.target.value)}
                        value={this.state.optionOne}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        required
                        id="optionTwo"
                        name="optionTwo"
                        label="Option 2"
                        fullWidth
                        autoComplete="optionTwo"
                        onChange={e => this.updateOption('optionTwo', e.target.value)}
                        value={this.state.optionTwo}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Button onClick={e => this.submit()}>Submit</Button>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

const withRouterNewQuestion = withRouter(NewQuestion)

const StyledNewQuestion = withStyles(styles)(withRouterNewQuestion)

export default connect(mapStateToProps)(StyledNewQuestion)
