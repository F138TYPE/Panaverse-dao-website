'use client'
import { Box, Center, Container, Divider, Flex, GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function page() {
    const color1 = "Linear-gradient(to right, #152238, #000000)";
    return (

        <> <Box>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Core Courses (Common In All  <br /> Specializations):

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >Every participant of the program will start  by completing the following three core courses:</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}   css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter I</Heading>
                            <Text pt={'10px'}>CS-101: Object-Oriented Programming using TypeScript</Text>

                        </Box>




                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'180px'} paddingRight={'60px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter II (Core)</Heading>
                                <Text pt={'10px'}>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>

                            </Box>
                        </Flex>

                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginBottom={'100px'} pb={'140px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}
                        css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter III (Core)</Heading>
                            <Text pt={'10px'}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>

                        </Box>

                    </Container>

                </Box>

            </GridItem>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Core Courses (Artificial Intelligence & Deep <br />Learning Specialization):

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} pb={'159px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter IV</Heading>
                            <Text pt={'10px'}>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</Text>

                        </Box>


                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'120px'} paddingRight={'60px'} marginBottom={'45px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'} > Quarter V</Heading>
                                <Text pt={'10px'}>\AI-361: Deep Learning and MLOps</Text>

                            </Box>
                        </Flex>


                    </Container>

                </Box>

            </GridItem>

            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Web 3.0 (Blockchain) & Metaverse Specialization

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }} >

                            < Heading paddingTop={'22px'}  >Quarter IV</Heading>
                            <Text pt={'10px'}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 </Text>

                        </Box>



                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'160px'} paddingRight={'60px'} marginBottom={'48px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter V</Heading>
                                <Text pt={'10px'}>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Text>

                            </Box>
                        </Flex>



                    </Container>

                </Box>

            </GridItem>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>

                                Cloud Native & Mobile Web Computing Specialization
                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >Cloud Native & Mobile Web Computing Specialization</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter IV</Heading>
                            <Text pt={'10px'}>CN-351: Certified Kubernetes Application Developer (CKAD)</Text>

                        </Box>



                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'150px'} paddingRight={'60px'} marginBottom={'37px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter V</Heading>
                                <Text pt={'10px'}>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>

                            </Box>
                        </Flex>


                    </Container>

                </Box>

            </GridItem>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Ambient Computing & IoT Specialization

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter IV</Heading>
                            <Text pt={'10px'}>AC-351: Ambient Computing with Voice Assistants </Text>

                        </Box>



                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'120px'} paddingRight={'60px'} marginBottom={'34px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter V</Heading>
                                <Text pt={'10px'}>AC-361: Embedded Programming using C and Rust</Text>

                            </Box>
                        </Flex>



                    </Container>

                </Box>

            </GridItem>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Network Programmability & Automation Specialization

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}> Quarter IV </Heading>
                            <Text pt={'10px'}>NPA-351: CCNA 200-301 Certification</Text>

                        </Box>


                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} marginBottom={'43px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter V</Heading>
                                <Text pt={'10px'}>NPA-361: Network Programmability and Automation</Text>

                            </Box>
                        </Flex>



                    </Container>

                </Box>

            </GridItem>
            <Box bg={color1} color={"whiteAlpha.800"}>
                <Container maxWidth={1400}>
                    <Center flexDir={'column'}>
                        <Box bg={color1} color={"whiteAlpha.800"}> <Flex justifyContent={"space-evenly"} alignContent={"center"} bg={color1} color={"whiteAlpha.700"}>
                            <Box fontSize={"6xl"} fontWeight={'bold'} textAlign={'center'} pb={'11px'} paddingTop={'77px'}>
                                Genomics & Bioinformatics Specialization

                            </Box>
                        </Flex>
                            <Flex justifyContent={"space-evenly"} alignContent={"center"} marginTop={"19px"} paddingBottom={"111px"}>
                                <Text fontSize={"2xl"} textAlign={'center'} >This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <GridItem>
                <Box>
                    < Container maxW={2500}>
                        <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} _hover={{
                            transform: "scale(1.2)",
                            transition: "transform 0.5s",
                        }}  css={{
                            "@media (max-width: 768px)": {
                              _hover: {
                                transform: "none",
                              },
                              pointerEvents: "none",
                            },
                          }}>

                            < Heading paddingTop={'22px'}  >Quarter IV</Heading>
                            <Text pt={'10px'}>Bio-351: Python for Biologists</Text>

                        </Box>






                        <Flex justifyContent={'end'}>
                            <Box boxShadow={'dark-lg'} textAlign={"left"} bg={color1} color={"whiteAlpha.800"} marginTop={"49px"} w={{ base: "100%", md: "480px" }} h="120px" marginStart={{ base: "", md: "250px" }} borderRadius={'lg'} paddingStart={'22px'} marginRight={{ base: 'none', md: '250px' }} pb={'100px'} paddingRight={'60px'} marginBottom={'40px'} _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.5s",
                            }}  css={{
                                "@media (max-width: 768px)": {
                                  _hover: {
                                    transform: "none",
                                  },
                                  pointerEvents: "none",
                                },
                              }}>

                                < Heading paddingTop={'22px'}  >Quarter V</Heading>
                                <Text pt={'10px'}>Bio-361: Bioinformatics with Python</Text>

                            </Box>
                        </Flex>



                    </Container>

                </Box>

            </GridItem>



        </Box>
        </>
    )
}

export default page