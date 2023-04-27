'use client'
import React from 'react'
import { Box, Button, Container, Flex, Heading, Text, Image, SimpleGrid ,Center,Grid, HStack, GridItem } from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'
function Bottom() {
    return (
        <> 
        <Container maxW={1400} mt={"100px"}>
            
           <Flex justifyContent={'center'} >
            <Box>
                <HStack mb={'33px'}>
                <Heading color='blackAlpha' size='3xl' marginLeft={'67px'} paddingRight={'13px'}>We are </Heading>< Heading color="blue.500" size={'3xl'} marginRight={'19px'}> Proud </Heading>
                </HStack>
                <Box marginLeft={'21px'}>
                    <Text marginBottom={'36px'} mt={'20px'} textAlign={'center'}>You don't have to struggle alone, you've got our assistance and help.</Text>
                </Box>
            </Box>
            
     </Flex> 
          <GridItem>
          <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
             <Flex marginLeft={'20px'} flexWrap="wrap" justifyContent="space-between" mb={'55px'}>
             
                 <Box paddingLeft={{base:"50px",md:'none'}} bg={'blue.600'} p={'50px'} borderRadius={'base'} w={{base:"800px", md :'300px'}} marginRight={{base:'40px',md:"25px"}} textColor={'whiteAlpha.900'} display={{ base: "block" }} boxShadow={'dark-lg'} mb={{base: "30px", md: "30px"}}>
                        
                        <Image src='\studentIcon.webp' paddingLeft={{base:"100px", md:'71px'}}/>
                        
                         <Heading paddingLeft={{ base:"97px", md:'50px'}} pt={'10px'} >5,000</Heading>
                     <Text  display="flex" pt={'5px'} paddingLeft={{base:"75px",md:'40px'}} >Students Enrolled</Text> 
                     
                        
                </Box>
 
                  <Box paddingLeft={{base:"50px",md:'none'}} bg={'pink.500'} p={'50px'} borderRadius={'base'} w={{base:"1000px", md :'300px'}} marginRight={'40px'} textColor={'whiteAlpha.900'} display={{ base: "block" }} boxShadow={'dark-lg'} mb={{base: "30px", md: "30px"}}>
                        
                        <Image src='\classes.webp' paddingLeft={{base:"100px", md:'65px'}}/>
                        
                         <Heading paddingLeft={{ base:"97px", md:'50px'}} pt={'10px'} >1,000</Heading>
                     <Text  display="block" pt={'5px'} paddingLeft={{base:"75px",md:'30px'}} >Class Completed</Text> 
                     
                        
                </Box>
                <Box paddingLeft={{base:"50px",md:'none'}} bg={'blueviolet'} p={'50px'} borderRadius={'base'} w={{base:"1000px", md :'300px'}} marginRight={'40px'} textColor={'whiteAlpha.900'} display={{ base: "block" }} boxShadow={'dark-lg'} mb={{base: "30px", md: "30px"}}>
                        
                        <Image src='\teacher.webp' paddingLeft={{base:"100px", md:'65px'}}/>
                        
                         <Heading paddingLeft={{ base:"97px", md:'50px'}} pt={'10px'} >100+</Heading>
                     <Text  display="block" pt={'5px'} paddingLeft={{base:"75px",md:'30px'}} >Skilled Instructors</Text> 
                     
                        
                </Box>
                <Box paddingLeft={{base:"50px",md:'none'}} bg={'green.600'} p={'50px'} borderRadius={'base'} w={{base:"1000px", md :'300px'}} marginRight={'40px'} textColor={'whiteAlpha.900'} display={{ base: "block" }} boxShadow={'dark-lg'} mb={{base: "30px", md: "30px"}}>
                        
                        <Image src='\businessman.jpg' paddingLeft={{base:"110px", md:'65px'}} w={{base:"164px", md: "133px"}}/>
                        
                         <Heading paddingLeft={{ base:"97px", md:'50px'}} pt={'10px'} >1,000</Heading>
                     <Text  display="block" pt={'5px'} paddingLeft={{base:"75px",md:'30px'}} >Managing Staff PIAIC</Text> 
                     
                        
                </Box>
                
                  
            </Flex>
            </RevealWrapper>
            </GridItem>
            </Container>
            
            
        </>
    )
}

export default Bottom