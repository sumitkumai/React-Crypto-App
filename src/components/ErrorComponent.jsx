import React from 'react'
import {Alert, AlertIcon} from "@chakra-ui/react";
const ErrorComponent = () => {
  return (
    <Alert status='error' position={"fixed"} bottom={"4"} left={"50%"} transform={"translateX(-50%)"} w={"container.lg"}>
      <AlertIcon/>
      Error while fetching...
    </Alert>
  )
}

export default ErrorComponent
