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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMensData, updateMensData } from "../../redux/admin/admin.action";

function UpdateMenProduct({ el }) {
  const toast = useToast();
  const [val, setVal] = useState({});
  const [prod, setProd] = useState({});
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVal({ ...val, [name]: value });
  };

  const handleUpdate = async (e) => {
    dispatch(updateMensData(el.id, val));
    dispatch(getMensData());
    console.log(val);
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
      <Text
        variantcolor="teal"
        backgroundColor={"tomato"}
        color={"white"}
        textAlign={"center"}
        borderRadius={"8%"}
        fontWeight={"medium"}
        padding={"4px"}
        fontSize={["sm", "18px"]}
        onClick={onOpen}>
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
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="title"
                  placeholder="Enter product Name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  name="images"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="images"
                  placeholder="Image"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Offer Price</FormLabel>
                <Input
                  type="text"
                  name="price"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="price"
                  placeholder="Offer Price"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>MRP Price</FormLabel>
                <Input
                  type="text"
                  name="strike_price"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="strike_price"
                  placeholder="MRP Price"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              variantcolor="teal"
              backgroundColor={"Black"}
              color={"white"}
              mr={3}
              onClick={handleUpdate}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
        :
      </Modal>
    </>
  );
}

export default UpdateMenProduct;
