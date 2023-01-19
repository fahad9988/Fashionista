import { Box,Text  } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Box display={"flex"} px="3%" gap="1%">
      <Box flex={0.2} border="1px solid blue">
          <Box>
              <Text>
                Top Categories
              </Text>
          </Box>
          <Box>

          </Box>
      </Box>
      <Box flex={1} border="1px solid red">
        <Box>
          <Box>
            
          </Box>
          <Box>

          </Box>
        </Box>
        <Box>

        </Box>
      </Box>
    </Box>
  )
}

export default HomePage