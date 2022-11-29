import React from 'react';
import { Box, Flex } from '../../../src/components/UI'

const pages: React.FC = (props) => {
    console.log('props', props)
    return (
        <>
            <Flex
                w='100%'
                h='100vh'
                bg='blackTheme'
                color='whiteTheme'
            >
                <Box as='section' >
                    dale
                </Box>
            </Flex>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params

    return {
        props: {
            slug,

        }
    }
}

export default pages;