module.exports = {
  table_prefix:"rehigher",
  tables: [
    {
      name: 'personality',
      columns: {
        id: 'id',
        person_id:'person_id',
        personality_type_id: 'foreign_id',
        locations:{
        }
      },
      indexes:[
        { columns: ['person_id'], unique: true }
      ]
    },
    {
      name: 'question_set',
      columns: {
        id: 'id',
        name: 'string'
    },
    {
      name: 'question',
      columns: {
        id: 'id',
        question_set_id:'foreign_id',
        answer_type: {
          type: 'string',
          values: ['Multiple Choice'],
        },
        answer_values:'json',
        text:'string'
      },
      indexes: [],
    },
    {
      name: 'answer',
      columns: {
        id: 'id',
        question_id: 'id',
        person_id: 'person_id',
        value:'string'
      },
      indexes: [],
    },
  ],
};
