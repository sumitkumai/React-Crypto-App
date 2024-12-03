import React from 'react'
import {Box , Image, Text} from "@chakra-ui/react";
import crypto from "../assets/cryptocurrency.jpg";
const Home = () => {
  return (
    <Box bgColor={"white"} w={"full"} h={"80vh"}>
      <Image w={"full"}  h={"full"} objectFit={"contain"} src={crypto}/>
      <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"bold"} color={"whiteAlpha.700"} mt={"-20"}>Xcrypto</Text>
    </Box>
  );
};

export default Home