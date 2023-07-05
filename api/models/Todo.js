/**
 * Todo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'todos',

  attributes: {

    body: {
      type: 'string',
      required: true,
      columnName: 'body',
    },
    isDone: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'is_done',
    },

  },

};

