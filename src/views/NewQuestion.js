import React, { Component } from 'react'

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

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    updateOption = (option, text) => {
        this.setState(prevState => {
            return { ...prevState, [option]: text }
        })
    }

    submit = () => {
        const { optionOne, optionTwo } = this.state
        const { authedUser, dispatch } = this.props
        dispatch(handleNewQuestion({ optionOne, optionTwo, author: authedUser.id }))
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

const StyledNewQuestion = withStyles(styles)(NewQuestion)

export default connect(mapStateToProps)(StyledNewQuestion)
