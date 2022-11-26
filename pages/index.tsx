import React from 'react';
import { Box, Flex } from '../src/components/UI'
import { Nav } from '../src/components/modules/Nav'

const pages: React.FC = () => {
    return (
        <>
            <Flex
                w={'100%'}
                h={'100vh'}
                bg='blackTheme'
                color='whiteTheme'
            >
                <Box>Index</Box>
            </Flex>
        </>
    )
}

export default pages;