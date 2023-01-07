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
} from '@chakra-ui/react';

export default function SocialProfileWithImage() {
    return (
        <Center py={6}>
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
                    <Text color={'gray.500'}>Full Cycle Developer</Text>
                </Stack>
                <Flex
                    p={6}
                    alignItems={'flex-start'}
                    justifyContent={'space-evenly'}
                >
                    <Stack direction={'row'} justify={'flex-start'} spacing={6}>
                        <Stack spacing={0} align={'flex-start'}>
                            <Text fontWeight={600}>Most used frameworks</Text>
                            {['React Native', 'React', 'Next'].map((item, index) => (
                                <Text key={index} fontSize={'sm'} color={'gray.500'}>
                                    {item}
                                </Text>
                            ))}

                        </Stack>
                    </Stack>
                    <Stack direction={'row'} justify={'flex-start'} spacing={6}>
                        <Stack spacing={0} align={'flex-start'}>
                            <Text fontWeight={600}>Main languages</Text>
                            {['Typescript', 'Javascript'].map((item, index) => (
                                <Text key={index} fontSize={'sm'} color={'gray.500'}>
                                    {item}
                                </Text>
                            ))}

                        </Stack>
                    </Stack>
                    <Stack direction={'row'} justify={'flex-start'} spacing={6}>
                        <Stack spacing={0} align={'flex-start'}>
                            <Text fontWeight={600}>Others</Text>
                            {['Docker', 'Nginx', 'pm2'].map((item, index) => (
                                <Text key={index} fontSize={'sm'} color={'gray.500'}>
                                    {item}
                                </Text>
                            ))}
                        </Stack>
                    </Stack>
                </Flex>
            </Box>
        </Center>
    );
}