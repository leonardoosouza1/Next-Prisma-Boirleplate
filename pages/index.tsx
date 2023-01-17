import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    VStack,
    HStack,
    Grid,
} from '@chakra-ui/react';

export default function SocialProfileWithImage() {
    return (
        <VStack spacing='32px' py={6}>
            <Box
                maxW={'550px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size='xl'
                        src={
                            'https://avatars.githubusercontent.com/u/71739468?v=4'
                        }
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>
                <Stack spacing={0} align={'center'} mb={5}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        Leonardo Souza
                    </Heading>
                    <Text color={'gray.500'}>Full Stack Developer</Text>
                </Stack>
                <Flex
                    p={6}
                    alignItems={'flex-start'}
                    justifyContent={'space-evenly'}
                >
                    <VStack px={8} spacing={2}>
                        <Text fontWeight={600}>About me</Text>
                        <Text textAlign='center' color={'gray.500'}>I've been a professional developer since 2020  </Text>
                    </VStack>
                </Flex>
            </Box>
            <VStack
                maxW={'1024px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                overflow={'hidden'}
            >
                <Image
                    h={'420px'}
                    w={'full'}
                    src={
                        'https://mentorama.com.br/blog/wp-content/uploads/2021/12/Arte-capa.png'
                    }
                    objectFit='contain'
                />
                <Stack
                    spacing={0}
                    align={'center'}
                >
                    <Heading
                        fontSize={'2xl'}
                        fontWeight={500}
                        mb='36px'
                    >
                        Front-end technologies
                    </Heading>
                </Stack>
                <Grid
                    p={8}
                    mb={8}
                    w='full'
                    borderTop='1px solid rgba(0,0,0,0.2)'
                    borderBottom='1px solid rgba(0,0,0,0.2)'
                    templateColumns='repeat(3, 1fr)'
                >
                    <VStack px={8} spacing={2}>
                        <Text fontWeight={600}>React</Text>
                        <Text textAlign='center' color={'gray.500'}>These are my favorite frameworks for working with interfaces and components.</Text>
                    </VStack>
                    <VStack px={8} spacing={2}>
                        <Text fontWeight={600}>Component libraries</Text>
                        <Text textAlign='center' color={'gray.500'}>I like to use Chakra-ui for web and Native-base for mobile.</Text>
                    </VStack>
                    <VStack px={8} spacing={2}>
                        <Text fontWeight={600}>Testing Application</Text>
                        <Text textAlign='center' color={'gray.500'}>I use Jest and React Testing Libary</Text>
                    </VStack>
                </Grid>
            </VStack>
        </VStack >
    );
}