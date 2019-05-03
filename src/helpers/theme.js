import { createMuiTheme } from '@material-ui/core/styles'

export const navHeight = 56

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiToolbar: {
            regular: {
                '&&': {
                    minHeight: `${navHeight}px`,
                    height: `${navHeight}px`,
                    maxHeight: `${navHeight}px`,
                },
            },
        },
        MuiBottomNavigation: {
            root: {
                minHeight: `${navHeight}px`,
                height: `${navHeight}px`,
                maxHeight: `${navHeight}px`,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            },
        },
    },
    typography: { useNextVariants: true },
})
