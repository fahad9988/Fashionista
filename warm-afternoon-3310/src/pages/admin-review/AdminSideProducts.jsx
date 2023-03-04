import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Get_data_item } from "../../redux/admin/admin.action";
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
import AdminMapProductBox from "./AdminMapProductBox";
import AdminNavbar from "./adminNavbar";
import ScrollButton from "./ScrollButton";

const AdminSideProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(Get_data_item());
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
            {products.data &&
              products.data.map((el) => {
                return <AdminMapProductBox key={el.id} el={el} />;
              })}
          </Grid>

          <ScrollButton />
        </div>
      </div>
    </div>
  );
};

export default AdminSideProducts;
