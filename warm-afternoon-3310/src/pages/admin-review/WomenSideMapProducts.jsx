import {
  Box,
  Button,
  GridItem,
  HStack,
  Image,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteWomensData } from "../../redux/admin/admin.action";
import UpdateWomenProduct from "./updateProductsWomen";

const WomenSideMapProducts = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      gap="20px">
      <GridItem
        m="auto"
        p="15px 7px"
        minW="210px"
        maxWidth="260px"
        key={el.id}
        position="relative"
        className="product-card"
        textAlign="center">
        <Image
          m="auto"
          src={el.images}
          width="200px"
          height="230px"
          alt="image"
        />
        <Text color="#748A9C" fontSize="14px" mt={2}>
          {el.title}
        </Text>
        <Text color="#748A9C" fontSize="14px">
          {el.price}
        </Text>
        <HStack display="flex" h="30px" alignItems="center" flexWrap="wrap">
          <Text
            fontSize="13px"
            color="#D6D0DB"
            textDecoration="line-through"
            ml={"70px"}>
            Rs. {el.strike_price}
          </Text>
        </HStack>

        <Box display="flex" h="30px" alignItems="center" gap="20px">
          <Button cursor={"pointer"} h="20px" w="80px">
            <UpdateWomenProduct el={el} />
          </Button>

          <Button
            onClick={() => {
              dispatch(deleteWomensData(el.id));
            }}
            cursor={"pointer"}
            backgroundColor={"black"}
            color={"white"}
            textAlign={"center"}
            borderRadius={"8%"}
            fontWeight={"medium"}
            fontSize={["sm", "18px"]}
            width={"90px"}
            h="30px"
            w="80px">
            Delete
          </Button>
        </Box>
      </GridItem>
    </Box>
  );
};

export default WomenSideMapProducts;
