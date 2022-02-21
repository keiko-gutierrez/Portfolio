import React, { useEffect, useState } from 'react'
import {
  useParams
  // Link
} from 'react-router-dom'
import {} from '@chakra-ui/react'
import { getProjects } from '../../api'
// import data from '../fauxDb.js'

function Portfolio () {
  const [projects, setProjects] = useState([])
  const { id } = useParams()
  // const project = data.keiko.find((project) => {
  //  return project.id === Number(id)
  // })
  useEffect(() => {
    getProjects()
      .then((remoteProjects) => setProjects(remoteProjects))
      .catch((err) => console.log(err))// setError(err.message))
    // console.log(id)
  })
  return (
    <div>hi</div>// <h2> {project.prjctName} </h2>
  )
}

export default Portfolio
