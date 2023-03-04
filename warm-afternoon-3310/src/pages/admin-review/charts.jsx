import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { Get_data_item } from "../../redux/admin/admin.action";
import { getMensData } from "../../redux/admin/admin.action";
import { getWomensData } from "../../redux/admin/admin.action";
import AdminNavbar from "./adminNavbar";

const AllCharts = () => {
  const  {data}  = useSelector((state) => state.data);
  console.log(data);
  const { mensData } = useSelector((state) => state.data);
  console.log(mensData);
 const { womensData } = useSelector((state) => state.data);
 console.log(womensData)

  const dispatch = useDispatch();

  const dataa = [
    {
      name: "Kids",
      count: data.length,
      color: "blue",
    }
    ,
    {
      name: "Mens",
      count: mensData.length,
      color: "green",
    },
    {
      name: "Womens",
      count: womensData.length,
      color: "red",
    },
  ];

  React.useEffect(() => {

    dispatch(Get_data_item());
    dispatch(getMensData());
    dispatch(getWomensData());

  }, []);

  return (
    <div>
        <AdminNavbar/>
      <Box w="70%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        

        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Text color={"red"}>Products Price Charts</Text>
        </Box>

        {/* Kids */}

        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Kids</Text>
          </Box>
          <LineChart
            width={900}
            height={400}
            data={data}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="30 30" />
            <XAxis dataKey="id" />
            <YAxis type="number" domain={[0, 400]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* mendata */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Mens</Text>
          </Box>
          <LineChart
            width={900}
            height={600}
            data={mensData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="45 45" />
            <XAxis dataKey="id" />
            <YAxis type="number" domain={[1000, 7000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* womendata */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Womens</Text>
          </Box>
          <LineChart
            width={900}
            height={500}
            data={womensData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="50 50" />
            <XAxis dataKey="id" />
            <YAxis type="string" domain={[100, 10000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>
      </Box>
    </div>
  );
};

export default AllCharts;