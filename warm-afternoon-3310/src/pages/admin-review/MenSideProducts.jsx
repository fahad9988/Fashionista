import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMensData, Get_data_item } from "../../redux/admin/admin.action";
import { Box, Heading, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import AdminMapProductBox from "./AdminMapProductBox";
import AdminNavbar from "./adminNavbar";
import MenSideMapProducts from "./MenSideMapProducts";

const MenSideProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.data);

  useEffect(()=>{
    dispatch(getMensData())

  },[])
 //console.log(products.mensData)



  return (
    <div>
      <AdminNavbar/>
      <Box  p={["20px","0px","2px","10px"]}  background={"tomato"} textAlign={"center"} >
        <Heading fontSize={"23px"}>Fashionista Product Items</Heading>
      </Box>
      <div >

        <div >
                <Table  >
                  <Thead>
                    <Tr>
                      <Th><Heading size={["xs","md"]}>Image</Heading></Th>
                      <Th><Heading size={["xs","md"]}>Title</Heading></Th>
                      <Th><Heading size={["xs","md"]}>Offer Price</Heading></Th>
                      <Th><Heading size={["xs","md"]}>MRP Price</Heading></Th>
                      <Th><Heading size={["xs","md"]}>Category</Heading></Th>
                      
                      <Th><Heading size={["xs","md"]}  >UPDATE</Heading></Th>
                      <Th><Heading size={["xs","md"]}  >DELETE</Heading></Th>

                    </Tr>
                  </Thead>
                  <Tbody>
                      {
                      (products.mensData &&
                        products.mensData.map((el) => {
                          return (
                                  <MenSideMapProducts  
                                   key={el.id}  
                                  el={el}  />
                          );
                        })) 
                        
                        }
                  </Tbody>
                  </Table>  
        </div>
      </div>
    </div>
  );
};

export  default MenSideProducts ;