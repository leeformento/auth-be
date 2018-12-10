
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes_table_two').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes_table_two').insert([
        {note_title: 'title 1', note_content: 'content 1'},
        {note_title: 'title 2', note_content: 'content 2'},
        {note_title: 'title 3', note_content: 'content 3'}
      ]);
    });
};
