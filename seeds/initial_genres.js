/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genres').del()
  await knex('genres').insert([
    {id: 1, genre: 'Drama'},
    {id: 2, genre: 'Fantasy'},
    {id: 3, genre: 'Adventure'}
  ]);
};
