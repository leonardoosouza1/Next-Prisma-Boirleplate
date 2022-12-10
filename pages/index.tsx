import React from 'react';
import { Box, Flex, } from '../src/components/UI'
import home2 from '../src/assets/home-2.jpg'
import home3 from '../src/assets/home-3.jpg'
import home from '../src/assets/home.jpg'

const __css = {
    '&:hover': {
        transform: 'scale(0.9)',
    }
}
const pages: React.FC = () => {

    return (
        <>
            <Flex
                w='100%'
                h='100vh'
                bg='grayTheme2'
                color='whiteTheme'
                as='section'
                justifyContent='space-between'
            >
                <Flex w='40%' direction='column' p='20px'>
                    <Box as='h1' fontSize='3rem' fontWeight='bold' > Lorem ipsum dolor</Box>
                    <Box as='p' fontSize='1.5rem' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Box>
                </Flex>
                <Box
                    width='50%'
                    height='80%'
                    objectFit='cover'
                    borderRadius='10px'
                    boxShadow='0 0 10px 0 rgba(0,0,0,0.5)'
                    margin='20px'
                    backgroundImage={`url(${home2.src})`}
                    backgroundSize='cover'
                    alt='gameplay screenshot'
                    __css={__css}
                />
            </Flex>
            <Flex
                w='100%'
                h='100vh'
                bg='grayTheme2'
                color='whiteTheme'
                as='section'
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Flex direction='column' p='20px' justifyContent='center' alignItems='center'>
                    <Box as='h1' fontSize='3rem' fontWeight='bold' > Lorem ipsum dolor</Box>
                    <Box as='p' mb='16px' fontSize='1.5rem' textAlign='center' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Box>
                </Flex>
                <Box
                    as='img'
                    width='80%'
                    height='60%'
                    objectFit='cover'
                    borderRadius='10px'
                    boxShadow='0 0 10px 0 rgba(0,0,0,0.5)'
                    backgroundImage={`url(${home3.src})`}
                    backgroundSize='cover'
                    __css={__css}
                />
            </Flex>
            <Flex
                w='100%'
                h='100vh'
                bg='grayTheme2'
                color='whiteTheme'
                as='section'
                direction='column'
                alignItems='center'
                justifyContent='center'
                zIndex={-1}
                position='relative'
            >
                <img
                    style={{
                        width: '90%',
                        height: '80%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
                        position: 'absolute',
                        zIndex: -1,
                    }}
                    src={home.src}
                    alt='gameplay screenshot'
                />
                <Flex bg='rgba(0,0,0,0.7)' direction='column' w='80%' p='44px' borderRadius='12px' justifyContent='left' alignItems='left'>
                    <Box as='h1' fontSize='3rem' fontWeight='bold' > Lorem ipsum dolor</Box>
                    <Box as='p' fontSize='1.5rem' textAlign='left' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Box>
                </Flex>

            </Flex>
        </>
    )
}

export default pages;