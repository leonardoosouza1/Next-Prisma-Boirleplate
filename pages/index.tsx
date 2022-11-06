import React from 'react'
import { Box, Button, Flex, Input } from '../src/components/UI'
import { useAuth } from '../src/hooks/useAuth'

const Blog: React.FC = (props) => {
  const { signIn, token, isAuthenticated } = useAuth()
  const handleLogin = async (e) => {
    e.preventDefault()
    await signIn({
      email: e.target.email.value,
      password: e.target.password.value,
    })

  }

  const styleInputProps = {
    width: '200px',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0 10px',
    marginBottom: '10px',
  }
  const styleButtonProps = {
    width: '200px',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0 10px',
    marginBottom: '10px',
  }

  return (
    <Flex as='form'
      onSubmit={handleLogin}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Input
        {...styleInputProps}
        name='email'
        type='email'
        placeholder='Email'
        mb={4}
      />
      <Input
        {...styleInputProps}
        name='password'
        type='password'
        placeholder='Password'
        mb={4}
      />
      <Button
        {...styleButtonProps}
        type='submit'>
        Press
      </Button>
    </Flex>
  )
}

export default Blog
