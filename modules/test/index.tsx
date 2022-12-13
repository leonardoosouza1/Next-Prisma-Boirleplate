import React from 'react';
import { Nav } from '../../src/components/modules/Nav'
// import { Container } from './styles';

const test: React.FC = () => {

    const moduleComponentArray = [
        {
            name: 'Nav',
            componenet: <Nav />,
            props: {
                bg: 'purpleTheme',
                color: 'whiteTheme',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '70px',
                px: 10,
                pb: 1,
            },
            children: [
                {
                    name: 'Logo',
                    component: <Icon w='50px' h='40px' />,
                    props: {
                        w: '50px',
                        h: '40px',

                    },
                },
                {
                    name: 'ButtonHeader',
                    component: <Flex {...buttonHeaderStyleProps} />,
                    repeat: {
                        times: 3,
                        labels: ['Home', 'Module', 'Contact', 'Blog'],
                    },
                    props: {
                        bg: 'purpleTheme',
                        color: 'whiteTheme',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },

                },
            ]
        }
    ]


    return <div />;
}

export default test;