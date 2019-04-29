import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'

import Navigation from '../components/Navigation'

import Home from './Home'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

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
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/new" component={NewQuestion} />
                        <Route path="/leaderboard" component={Leaderboard} />
                        <Route component={Home} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null,
    }
}

export default connect(mapStateToProps)(App)
