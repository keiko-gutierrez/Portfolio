import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  VStack,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider
} from '@chakra-ui/react'
// import data from '../fauxDb.js'
// linter happy
// console.log(useEffect, useState, useParams)

function Nav () {
  // function map ()
  return (
    <nav>
      <ul>
        <Flex float="left" bg='purple.50'>
          <VStack spacing={8}>
            <Link to='/home'>
              <Button bg='purple.100'>
                Home
              </Button>
            </Link>
            <Link to='/about'>
              <Button bg='purple.100'>
                About
              </Button>
            </Link>
            <Menu>
              <MenuButton as={Button} bg='purple.100'>
                  Projects
              </MenuButton>
              <MenuList spacing='10'>
                <MenuGroup border='ButtonFace' spacing='10'>
                  <MenuItem bg='purple.100'>{
                    data.keiko.map((project) => {
                      return <Link key={project.id} to={`/portfolio/${project.id}`} >
                            Project{project.id} </Link>
                    })
                  } </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
            <Link to='/contact'>
              <Button bg='purple.100'>Contact</Button>
            </Link>
          </VStack>
        </Flex>
      </ul>
    </nav>
  )
}

export default Nav
