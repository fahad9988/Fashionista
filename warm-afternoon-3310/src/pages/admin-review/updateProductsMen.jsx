import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Select,
    Text
  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMensData,  updateMensData} from "../../redux/admin/admin.action";
// import { UpdateAction } from "../../redux/authReducer/auth.action";
  


  function UpdateMenProduct({el}) {
    const toast = useToast();
    const [val,setVal] = useState({})
    const [prod,setProd]  = useState({})
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();

    // let {products} = useSelector((store)=>store.adminManager)
    // console.log(products)
   // console.log(el,"l")
    

    // useEffect(()=>{
    //      dispatch(Get_data_item())
    // },[dispatch])

    const handleChange = (e)=>{
      const {name,value} = e.target

      setVal({...val,[name]:value})
    }
    //console.log(val)

    const handleUpdate = async(e) => {
        dispatch(updateMensData(el.id,val))
        dispatch(getMensData())
        console.log(val)
      e.preventDefault();
      toast({
        title: "Congratulations",
        description: "Product Updated sucessfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
       
    };
  
    return (
      <>
        <Text variantcolor="teal" backgroundColor={"tomato"} color={"white"} textAlign={"center"} padding={"5px"} borderRadius={"8%"} fontWeight={"medium"} fontSize={["sm","xl"]} onClick={onOpen}>
          Update
        </Text>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader backgroundColor={"skyblue"}>Update</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={handleUpdate}>

                <FormControl mt={4}>
                  <FormLabel>Title</FormLabel>
                  <Input
                
                    type="text"
                    name="title"
                    onChange={(e)=>{handleChange(e)}}
                    id="title"
                    placeholder="Enter product Name"
                   
                  />
                </FormControl>
                <FormControl>
                  <FormLabel >Image</FormLabel>
                  <Input
                    type="text"
                    name="images"
                    onChange={(e)=>{handleChange(e)}}
                    id="images"
                    placeholder="Image"
                  />
                </FormControl>
  
               
                
    
  
                <FormControl mt={4}>
                  <FormLabel >Category</FormLabel>
                
                  <Select name="category"  onChange={(e)=>{handleChange(e)}}  id="category" placeholder='Select Category' >
                              <option value='mens'>Mens </option>
                              <option value='womens'>Womens</option>
                              <option value='child'>Child</option>
                    </Select>
                  
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel >Offer Price</FormLabel>
                  <Input
                    type="text"
                    name="price"
                    onChange={(e)=>{handleChange(e)}}
                    id="price"
                    placeholder="Offer Price"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel >MRP Price</FormLabel>
                  <Input
                    type="text"
                    name="strike_price"
                    onChange={(e)=>{handleChange(e)}}
                    id="strike_price"
                    placeholder="MRP Price"
                  />
                </FormControl>

                
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button variantcolor="teal" backgroundColor={"Black"} color={"white"} mr={3} onClick={handleUpdate}>
                Update
              </Button>
              
            </ModalFooter>
          </ModalContent>:
          
          
        </Modal>
      </>
    );
  }
  
  export default UpdateMenProduct;