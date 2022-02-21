const connection = require('./connection')

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject
} /

function sort (projectArray) {
  const allprojects = [...projectArray]
  allprojects.sort((a, b) => a.id - b.id)
  return allprojects
}

async function getProjects (db = connection) {
  return db('projects').select().then(sort)
}

async function addProject (project, db = connection) {
  return db('projects')
    .insert(project)
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function updateProject (newProject, user, db = connection) {
  return db('projects')
    .where('id', newProject.id)
    .first()
    .then(project => authorizeUpdate(project, user))
    .then(() => {
      return db('projects')
        .where('id', newProject.id)
        .update(newProject)
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function deleteProject (id, auth0Id, db = connection) {
  return db('projects')
    .where('id', id)
    .first()
    .then(project => authorizeUpdate(project, auth0Id))
    .then(() => {
      return db('projects')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

function authorizeUpdate (project, auth0Id) {
  if (project.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
