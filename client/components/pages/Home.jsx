import React from 'react'
// import { Link } from 'react-router-dom'
// import {} from '@chakra-ui/react'
// import data from '../fauxDb.js'
import projects from '../../../server/db/projects'

const data = projects

function Home () {
  return (
    <div>
      {data.keiko.map((project) => {
        <p key={project.id} >{project.prjctName}</p>
      })}
    </div>
  )
}

export default Home
