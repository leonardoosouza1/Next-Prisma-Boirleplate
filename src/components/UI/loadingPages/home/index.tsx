import { Box, Skeleton } from '@chakra-ui/react'

export const loading = () => {
    return (
        <Box>
            <Skeleton isLoaded={!loading}>
            </Skeleton>
        </Box>
    )
}