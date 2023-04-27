
'use client'
// import { Box, Button, Container, Flex, SimpleGrid, Menu, IconButton, MenuButton, MenuList, MenuItem, List, ListItem, HStack } from '@chakra-ui/react'
// import Image from 'next/image'
// import { HamburgerIcon } from '@chakra-ui/icons'
// import Link from 'next/link'
// import png from '/public/image.png'



// export default function Header() {
//   return (
//     <> <Box>

//       <Box margin={'10px'} borderRadius={'unset'} rounded={'full'} >
//         <HStack>
//           <Image src={'/panaverse-logo.webp'} alt='panaverse logo' width={'100'} height={'100'} ></Image>
//           <Box >
//           <List>
//             <HStack>
//               <Link  href={'/'}>Home</Link>
//               < Link  href={'/about'}  >About</Link>
//               <Link href={'/Syllabus'} >Syllabus</Link>
//             </HStack>
//           </List>
//                 </Box>
//         </HStack>
//       </Box>

      
//     </Box>
//     </>
//   )
// }

// import { Box, Button, Container, Flex, SimpleGrid, Menu, IconButton, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
// import Image from 'next/image'
// import { HamburgerIcon } from '@chakra-ui/icons'
// import Link from 'next/link'


// export default function Header() {
//     return (
//         <Box boxShadow='lg'>
//             <Container maxW={1400}>
//                 <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
//                     <Box >
//                         <Image src='/panaverse-logo.webp' alt='panaverse-logo' width={'100'} height={'100'} ></Image>
//                     </Box>
//                     <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10}>
//                         <Link href='/'>Home</Link>
//                         <Link href='/syllabus'>Syllabus</Link>
//                         <Link href='/explore'>Explore</Link>
//                         <Link href='/about'>About</Link>
//                         <Link href='/contact'>Contact</Link>

//                     </Flex>
//                     <Box display={{ lg: 'initial', base: 'none' }}>
//                         <Button mt='10px' size='lg' colorScheme='teal' float='right'>Apply</Button>
//                     </Box>
//                     <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
//                         <Menu  >
//                             <MenuButton float='right'
//                                 as={IconButton}
//                                 aria-label='Options'
//                                 icon={<HamburgerIcon />}
//                                 variant='outline'
//                             />
//                             <MenuList>
//                                 <MenuItem>
//                                     Home
//                                 </MenuItem>
//                                 <MenuItem>
//                                     Syllabus
//                                 </MenuItem>
//                                 <MenuItem>
//                                     Explore
//                                 </MenuItem>
//                                 <MenuItem>
//                                     About
//                                 </MenuItem>
//                                 <MenuItem>
//                                     Contact
//                                 </MenuItem>
//                             </MenuList>
//                         </Menu>
//                     </Box>
//                 </SimpleGrid>
//             </Container>
//         </Box>
//     )
// }
import React from "react";
import {
  Flex,
  Box,
  Heading,
  IconButton,
  useDisclosure,
  Stack,
  VStack,
  HStack,
  Link,
  Button,
  Fade,
  
} from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import Image from 'next/image';

 
const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Syllabus", href: "/Syllabus" },
];

const NavLink = ({  label , href   }: Links ) => (
  <NextLink href={href} passHref>
    <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.200" }}>
      {label}
    </Link>
  </NextLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  
  return (
   
    <Box bg={"gray.100"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />   <Box>
          
              <Image src={'/panaverse-logo.webp'} width={'100'} height={'100'}></Image>
            </Box><HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                {Links.map((link) => (
                  <NavLink key={link.label} {...link} />
                ))}
              </HStack><Link href="https://www.piaic.org/">
                <Box display={{ base: "none", md: "flex" }}>
                  <Button variant={"solid"} colorScheme={"purple"} size={"sm"}>
                    PIAIC
                  </Button>

                </Box>
              </Link>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    
    </Box>
    
    
  );
};

export default Navbar;




