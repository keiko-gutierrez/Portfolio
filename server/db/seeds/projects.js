exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'rowValue1', info: 'input microblog about project here', liveLink: 'url string of live website', repoLink: 'url sting of public repository(github)' },
        { id: 2, name: 'rowValue2', info: 'input microblog about project here', liveLink: 'url string of live website', repoLink: 'url sting of public repository(github)' },
        { id: 3, name: 'rowValue3', info: 'input microblog about project here', liveLink: 'url string of live website', repoLink: 'url sting of public repository(github)' }
      ])
    })
}
