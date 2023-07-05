/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'GET /todos/': 'todos/get-todos',
  'GET /todos/:id': 'todos/get-todo',
  'POST /todos/': 'todos/create-todo',
  'PATCH /todos/:id': 'todos/update-todo',
  'DELETE /todos/:id': 'todos/delete-todo',

};
