import React from 'react';
import { Box, Button, Flex, Input } from '../src/components/UI';
import { useAuth } from '../src/hooks/useAuth';
import { Toast } from '@chakra-ui/react'
const SignUp: React.FC = () => {
    const { signUp } = useAuth();
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password, name, phone, document } = e.target.elements;
        try {
            await signUp({
                email: email.value,
                password: password.value,
                name: name.value,
                phone: phone.value,
                document: document.value,
            })

            Toast({
                title: "Account created.",
                description: `Welcome ${name}, your account has been created successfully.`,
            })

        } catch {
            Toast({
                title: "Error",
                description: "Error",
                status: "error",
                duration: 5000,
            })
        }
    }

    return (
        <Flex
            onSubmit={onSubmit}
            as='form'
            w="100vw"
            h="100vh"
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Input
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                name='email'
                type='email'
                placeholder='Email'
                mb={4}
            />
            <Input
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                name='password'
                type='password'
                placeholder='Password'
                mb={4}
            />
            <Input
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                name='name'
                type='text'
                placeholder='Name'
                mb={4}
            />
            <Input
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                name='document'
                type='text'
                placeholder='Document'
                mb={4}
            />
            <Input
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                name='phone'
                type='text'
                placeholder='Phone'
                mb={4}
            />
            <Button
                width='200px'
                height='40px'
                border='1px solid #ccc'
                borderRadius='4px'
                padding='0 10px'
                marginBottom='10px'
                type='submit'
            >
                Sign up
            </Button>
        </Flex>
    )
}

export default SignUp