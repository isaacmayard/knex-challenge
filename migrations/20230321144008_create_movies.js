/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id"); // adds an auto incrementing PK column
    table.string("title").notNullable();
    table.integer("genre_id");
    table.foreign("genre_id").references("genres.id");
  });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable("movies", (table) => {
      table.dropForeign("genre_id");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("movies");
    });
};
