exports.up = function (knex) {
  return knex.schema.createTable('images', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('pathway')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('images')
}
