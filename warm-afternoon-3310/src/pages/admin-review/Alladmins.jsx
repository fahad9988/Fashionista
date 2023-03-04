import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../../redux/admin/admin.action'
import AdminNavbar from './adminNavbar'



const AllUsers = () => {
    const { users } = useSelector((store) => store.data)
    const dispatch = useDispatch()

    let available = false


    useEffect(() => {
        showUser()
    }, [])

    const showUser = () => {
        dispatch(getUsers())
    }
    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
    }
    
    return (
        <div>
            <AdminNavbar/>
            <Box  p={["20px","0px","2px","10px"]}  background={"tomato"} textAlign={"center"}>

                <Heading fontSize={"23px"}>Admin data</Heading>
            </Box>
            <Box  width={"90%"}  border= "0px solid red" margin={"auto"} mt="50px">

                <SimpleGrid columns={[1, 2, 3, 4]} gap="5%" width={"100%"}>
                    {
                        users.map((el => {
                            return (

                                <div >
                                    <Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px"  pb={"7px"} >
                                        
                                        <div style={{padding:"5px",width:"auto",height:"150px"}} >
                                            <p>
                                                <span style={{fontWeight:"bold"}} >Name: </span>  {el.name}
                                            </p>
                                            <p>
                                                <span style={{fontWeight:"bold"}} >Email: </span>  {el.email}
                                            </p>
                                            <p>
                                                <span style={{fontWeight:"bold"}} >Mobile: </span>  {el.mobile}
                                            </p>
                                            <p>
                                                <span style={{fontWeight:"bold"}} >Password: </span>  {el.password}
                                            </p>
                                        </div>
                                    

                                    <div style={{color:"white",backgroundColor:"black",textAlign:"center",width:"170px",margin:"auto"}}>

                                    <div style={{color:"white",backgroundColor:"black",textAlign:"center",width:"150px",margin:"auto"}}>

                                        <button
                                            onClick={() =>handleDelete(el.id)}
                                            fontSize="130%"
                                            cursor="pointer"
                                            textAlign={"center"}
                                            
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    </Box>
                                </div>
                            )
                        }))
                    }
                </SimpleGrid>
            </Box>
        </div>
    )
}

export default AllUsers