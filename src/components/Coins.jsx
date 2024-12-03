import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {server} from "../index";
import ErrorComponent from "../components/ErrorComponent";
import Loader from "./Loader";
import {
  Container,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=inr`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <div>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((i) => (
                <CoinsCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                />
              ))}
            </HStack>
          </>
        )}
      </Container>
    </div>
  );
};

const CoinsCard = ({ id, name, img, price, url }) => {
  return (
    <Link to={`/coins/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {name}
      </Heading>
      <Text noOfLines={1}>₹ {price}</Text>
    </VStack>
    </Link>);
};



export default Coins;
