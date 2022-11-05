import { theme, extendTheme } from '@chakra-ui/react'
import jsonTheme from '../theme.json'

const customTheme = {
    ...jsonTheme,
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
    }
}

export default extendTheme(customTheme)
