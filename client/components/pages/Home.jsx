import React, { useEffect, useState } from 'react'
import { getProjects } from '../../api'
// import { Link } from 'react-router-dom'
// import {} from '@chakra-ui/react'
// import data from '../fauxDb.js'
// import projects from '../../../server/db/projects'

// const data = projects

function Home () {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
      .then((remoteProjects) => {
        console.log(remoteProjects)
        setProjects(remoteProjects)
        return null
      })
      .catch((err) => console.log(err))// setError(err.message))
    // console.log(id)
  })
  return (
    <div>
    </div>
  )
}

export default Home
