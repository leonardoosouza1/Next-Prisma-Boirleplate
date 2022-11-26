import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = {
    colors: {
        purpleTheme: '#5f43b2',
        blackTheme: '#0e1111',
        whiteTheme: '#fefdfd',
        grayTheme: '#b1aebb',
        grayTheme2: '#3a3153',
    },
    sizes: {
        ...theme.space,
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        container: {
            xs: '640px',
            sm: '768px',
            md: '1024px',
            lg: '1280px',
            xl: '1920px'
        }
    },
    styles: {
        global: {
            "*": {
                margin: 0,
                padding: 0,
                outline: 0,
                boxSizing: "border-box"
            },
            "html, body, #__next": {
                height: "100%",
                fontFamily: "Poppins, sans-serif",
            }
        }
    }
}

export default extendTheme(customTheme)
