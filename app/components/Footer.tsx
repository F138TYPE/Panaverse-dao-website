'use client'

import { Box, Container, Grid, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react"
// import Image from "next/image"
import Link from "next/link"
import png from '../../../public/Logo.png'

export default function Footer() {
    return (
        <Box bg='#0c0c0c'>
            <Container maxW={1300}>
                <SimpleGrid textAlign={{ lg: 'start', base: 'center' }} spacing='30px' py='60px' templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
                    <Box >
                        <Heading pb='20px' color='white'>About Us</Heading>
                        <Image m={{ base: 'auto', lg: '0' }} src='/image.png' alt='Panaverse'></Image>
                        <Text pt='15px' pr={{ lg: '40px', base: '0' }} color='gray'>The Future of the Web is Web 3.0, Metaverse,
                         and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally.
                          It is community of Web 3 and Metaverse developers, designers, trainers,
                         startup founders and service providers. </Text>
                    </Box>
                    <Box>
                        <Heading color='white'>Useful Links</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='/'>Home</Link>
                            <Link href='/'>Syllabus</Link>
                            <Link href='/'>Explore</Link>
                            <Link href='/'>About</Link>
                            <Link href='/'>Contact</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Follow Us</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='https://www.facebook.com/groups/piaic/'>Facebook</Link>
                            <Link href='https://www.linkedin.com/company/panaverse/'>Linkedin</Link>
                            <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
                            <Link href='https://www.youtube.com/@panaverse'>Youtube</Link>
                            <Link href='https://github.com/panaverse'>GitHub</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Contact Us</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='/'>+92 123 4567890</Link>
                            <Link href='/'>abcdefghi@gmail.com</Link>
                            <Link href='/'>Karachi, Pakistan</Link>
                        </Grid>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}