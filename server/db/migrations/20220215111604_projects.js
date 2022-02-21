exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('info')
    table.string('livelink')
    table.string('repoLink')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
