import React from 'react'
import {VStack, Box, Spinner} from "@chakra-ui/react";
const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Spinner size={"xl"}></Spinner>
    </VStack>
  )
}

export default Loader
