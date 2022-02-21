import React from 'react'
// import { Link } from 'react-router-dom'
import {
  Box,
  Center
} from '@chakra-ui/react'
// import data from '../fauxDb.js'

function About () {
  return (
    <div>
      <Box bg='purple.50' text='purple.200' height='xl'>
        <Center>
          <p > this i where i can write about my back ground and my hobbies
          maybe have a mini blog </p>
          <div><image href='../blog-pics/babyYoda.jpg' /></div>
        </Center>
      </Box>
    </div>
  )
}

export default About
