import React from 'react'
import {Box, VStack, Text } from "@chakra-ui/react";
import {AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai";
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} display={"flex"} flexDirection={["column","row"]} color={"white"} h={"10vh"} p={["2","9"]} justifyContent={['space-evenly',"space-between"]} alignItems={"center"}>
            <VStack ><Text fontSize={"medium"} fontWeight={"bold"} fontStyle={"sans-serif"}>© 2024 Xcrypto. All rights reserved</Text></VStack>
            <VStack display={"flex"} flexDirection={"row"}>
                <Text fontSize={"medium"} fontWeight={"bold"} fontStyle={"sans-serif"}>Follow Us : </Text>
                <a href="https://www.instagram.com/_sumit_688"><AiFillInstagram/></a>
                <a href="https://twitter.com/sumit_kumai"><AiFillTwitterCircle/></a>
                <a href="https://www.facebook.com/profile.php?id=100070315405528"><AiFillFacebook/></a>
            </VStack>
        
    </Box>
  )
}

export default Footer
