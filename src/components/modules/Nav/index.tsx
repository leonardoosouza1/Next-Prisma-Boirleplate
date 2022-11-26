import React from 'react';
import Link from 'next/link';
import { Icon } from '@chakra-ui/icons'
import { Box, Flex, Button } from '../../UI'
// import { Container } from './styles';

export const Nav: React.FC = () => {
    const navigationOptions = [
        {
            name: 'Home',
            path: '/'

        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
    ]
    return (
        <Flex
            {...mainHeaderStyleProps}
        >
            <Box
                {...logoStyleProps}
            >
                <Link href='/'>
                    <Icon w='50px' h='40px' />
                </Link>
            </Box>
            <Box>
                <Flex
                    {...buttonHeaderStyleProps}
                >
                    {navigationOptions.map(({ name, path }, index) => (
                        <Link href={path}>
                            <Button
                                key={index}
                                {...buttonStyleProps}
                            >
                                {name}
                            </Button></Link>
                    ))}
                </Flex>
            </Box>

        </Flex>
    );
}

const mainHeaderStyleProps = {
    bg: 'purpleTheme',
    color: 'whiteTheme',
    px: 10,
    pb: 1,
    width: '100%',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const logoStyleProps = {
    bg: 'purpleTheme',
    color: 'whiteTheme',
    _hover: {
        bg: 'purpleTheme',
        color: 'whiteTheme',
    },
    _active: {
        bg: 'purpleTheme',
        color: 'whiteTheme',
    }

}

const buttonHeaderStyleProps = {
    gap: 15,
}

const buttonStyleProps = {
    bg: 'grayTheme2',
    border: '1px solid black',
    borderRadius: 5,
    p: 2,
    shadow: '3px 3px 0px 3px rgba(0,0,0,0.75)',
    transition: 'all 0.3s ease-in-out',
    _hover: {
        bg: 'whiteTheme',
        color: 'purpleTheme',
        transform: 'translate(3px,3px)',
        shadow: '3px 3px 0px 0px rgba(0,0,0,0.75)',
    }
}