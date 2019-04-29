import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    typography: { useNextVariants: true },
})

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <header className="App-header">
                    <p>hello world!</p>
                </header>
            </div>
        </MuiThemeProvider>
    )
}

export default App
