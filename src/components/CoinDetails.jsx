import React from "react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import {
  Container,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  HStack,
  Box,
} from "@chakra-ui/react";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id]);

  if (error) return <ErrorComponent />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <VStack spacing={"4"} p={"16"} alignItems={"center"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>₹ {coin.market_data.current_price["inr"]}</StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge
              fontSize={"2xl"}
              bgColor={"blackAlpha.800"}
              color={"white"}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`₹ ${coin.market_data.high_24h["inr"]}`}
              low={`₹ ${coin.market_data.low_24h["inr"]}`}
            />

            <Box w={"full"} p={"4"}>
              <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
              <Item title={"Cerculating Supply"} value={coin.market_data.circulating_supply}/>
              <Item title={"Market Cap"} value={`₹ ${coin.market_data.market_cap["inr"]}`}/>
              <Item title={"All Time Low"} value={`₹ ${coin.market_data.atl["inr"]}`}/>
              <Item title={"All Time High"} value={`₹ ${coin.market_data.ath["inr"]}`}/>
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({title,value})=>{
  return(
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
      <Text fontFamily={"sans-serif"} letterSpacing={"normal"} fontWeight={"bold"}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  )
}

const CustomBar = ({ high, low }) => {
  return (
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} w={"full"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={low} colorScheme={"red"} />
        <Text fontSize={"sm"}>24H Range</Text>
        <Badge children={high} colorScheme={"green"} />
      </HStack>
    </VStack>
  );
};

export default CoinDetails;
