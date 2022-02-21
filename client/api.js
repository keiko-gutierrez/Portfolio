import request from 'superagent'

const rootUrl = '/api/v1/portfolio/'

export function getPortfolio() {
  return request.get(`${rootUrl}/projects`)
    .then(res => res.body.projects)
}
export function addProject(projects, token) {
  return request.post(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ project })
    .then(res => res.body.projects)
    .catch(logError)
}

export function updateProject(project, token) {
  return request.put(`${rootUrl}/projects`)
    .set('authorization', `Bearer ${token}`)
    .send({ project })
    .then(res => res.body.projects)
    .catch(logError)
}

export function deleteProject(id, token) {
  return request.delete(`${rootUrl}/projects/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send()
    .then(res => res.body.projects)
    .catch(logError)
}

export async function addUser(user) {
  return request.post(`${rootUrl}/users`)
    .send(user)
    .catch(logError)
}

function logError(err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who owns the project may update, edit and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
