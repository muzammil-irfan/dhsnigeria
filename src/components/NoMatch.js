import React from 'react'
import {Container, Heading} from '@chakra-ui/layout'

export default function NoMatch() {
    return (
        <>
        <Container maxW="7xl" height="100vh" justify="center" align="center">
            <Heading my={20}>404 - Not Found</Heading>
        </Container>
        </>
    )
}
