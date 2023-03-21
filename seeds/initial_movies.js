/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'The Return of the King', genre_id: 2},
    {id: 2, title: 'Interstellar', genre_id: 3},
    {id: 3, title: 'The Fellowship of the Ring', genre_id: 2},
    {id: 4, title: 'The Hateful Eight', genre_id: 1},
    {id: 5, title: 'Troy', genre_id: 3}
  ]);
};
