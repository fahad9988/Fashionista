import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomensData } from "../../redux/admin/admin.action";
import {
  Box,
  Grid,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import AdminNavbar from "./adminNavbar";
import WomenSideMapProducts from "./WomenSideMapProducts";
import ScrollButton from "./ScrollButton";

const WomenSideProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(getWomensData());
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Box
        p={["20px", "0px", "2px", "10px"]}
        background={"tomato"}
        textAlign={"center"}>
        <Heading fontSize={"23px"}>Fashionista Product Items</Heading>
      </Box>
      <div>
        <div>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
            rowGap="20px"
            ml={{ base: "25px", md: "50px", lg: "90px" }}
            mt="15px">
            {products.womensData &&
              products.womensData.map((el) => {
                return <WomenSideMapProducts key={el.id} el={el} />;
              })}
          </Grid>

          <ScrollButton />
        </div>
      </div>
    </div>
  );
};

export default WomenSideProducts;
