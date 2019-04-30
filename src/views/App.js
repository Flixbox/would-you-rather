import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'

import Navigation from '../components/Navigation'

import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'

import { handleInitialData } from '../actions/shared'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    typography: { useNextVariants: true },
})

/**
 * The main app that contains the entire page.
 * This also contains the theme provider.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { user } = this.props
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {user ? (
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/new" component={NewQuestion} />
                            <Route path="/leaderboard" component={Leaderboard} />
                        </Switch>
                    </Router>
                ) : (
                    <Login />
                )}
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(App)
