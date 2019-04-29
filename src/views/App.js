import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'

import Navigation from '../components/Navigation'
// import MainView from './MainView'

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
function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navigation />
                <div className="App">
                    <header className="App-header">
                        <p>hello world!</p>
                    </header>
                </div>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
