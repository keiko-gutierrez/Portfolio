exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        { id: 1, name: 'rowValue1', pathway: 'imput cloud url as string' },
        { id: 2, name: 'rowValue2', pathway: 'imput cloud url as string' },
        { id: 3, name: 'rowValue3', pathway: 'imput cloud url as string' }
      ])
    })
}
