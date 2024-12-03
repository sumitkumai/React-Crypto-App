import React from 'react'
import {Button, HStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack h={"10vh"} p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"} m={"2"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} m={"2"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} m={"2"}>
        <Link to="/coins">Coins</Link>
      </Button>

    </HStack>
  )
}

export default Header
