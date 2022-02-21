import React from 'react'
import {
  Box,
  Center
} from '@chakra-ui/react'

function Footer (props) {
  const copyright = '2022 KeikoGTZ'
  const developer = 'Keiko'

  return (
    <div className='footer'>
      <Box bg='purple.200'>
        <Center>
          <div>&copy; {copyright}</div>
          <div>{developer}</div>
        </Center>
      </Box>
    </div>
  )
}

export default Footer
