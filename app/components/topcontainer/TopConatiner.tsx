

"use client"
import { Box, Button, Container, Flex, Heading, Text, Image  } from '@chakra-ui/react'
 import image from 'next/image'


export default function Banner() {
    return (
        <> 
            <Box bgAttachment='fixed' backgroundRepeat={'no-repeat'} backgroundSize='cover' bgImage='https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'>
           
                <Container maxW={1400}>
                    <Flex pt={{ lg: '150px', base: '30px' }} pb={{ lg: '100px', base: '0' }} px={{ lg: '40px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis={{ lg: '50%', base: '%' }} px={{ lg: '40px', base: '0' }}>
                        
                            <Heading color='white' size='2xl'>Certified Web 3.0 and Metaverse Developer </Heading><Heading color='purple' size='3xl' lineHeight={'1.5'}> Panaverse</Heading>
                            <Text pt='10px' color={'gray'} lineHeight='1.5' pb={'20px'}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</Text>
                            <Button mt='10px' size='lg' colorScheme='purple'>More Info</Button>
                        </Box>
                        <Box mt={{ lg: '-80px', base: '0' }} flexBasis='50%'>
                            <Image src='\playing-with-virtual-reality-glasses-3d-illustration_1119-4544-removebg-preview.png' alt="Panaverse" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} borderRadius={"full"} />
                
                        </Box>
                    </Flex>

                </Container>
            </Box>

            

            <Box>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' paddingTop={'31px'}>

                            <Image src='\metaverse-digital-virtual-reality-technology-wears-vr-glasses-for-future-innovation-and-communication-in-hand-drawn-flat-cartoon-illustration-vector.jpg' alt="Panaverse" width={{ lg: '700', base: '100' }} height={{ lg: '300', base: '200' }} />

                        </Box>
                        <Box flexBasis='50%' pt={{ lg: '80px', base: '10px' }} px={{ lg: '0', base: '5px' }}>

                            <Heading size='2xl'>Program Of Studies</Heading>
                            <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                            <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            
                        </Box>
                       
                    </Flex>
                </Container>
            </Box>
            <Box mb={'33px'} mt={'64px'}>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' pl={{ lg: '60px', base: '5px' }} pt={{ lg: '80px', base: '30px' }}  >

                            <Heading size='2xl'  >Classes in Karachi, Lahore, Islamabad, and Peshawar</Heading>
                            <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more. Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds.Citi stated in a March 2022 research paper that the metaverse economy might have a total
                                addressable market of up to $13 trillion and five billion people by 2030.</Text>
                            <Button mt='33px' size='lg' colorScheme='teal' mb={'88px'} >Read More</Button>

                        </Box>
                        <Box flexBasis='50%' mt={'125px'}>

                            <Image src='\904574-cities-1434450942.jpg' alt="Panaverse" width={{ lg: '500px', base: '500px' }} height={{ lg: '400px', base: '400px' }} />

                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

