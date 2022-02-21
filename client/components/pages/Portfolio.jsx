import React from 'react'
import {
  useParams
  // Link
} from 'react-router-dom'
import {} from '@chakra-ui/react'
// import data from '../fauxDb.js'

function Portfolio () {
  const { id } = useParams()
  const project = data.keiko.find((project) => {
    return project.id === Number(id)
  })
  console.log(id)
  return (
    <h2> {project.prjctName} </h2>
  )
}

export default Portfolio
