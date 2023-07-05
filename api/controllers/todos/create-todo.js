module.exports = {

  friendlyName: 'Create todo',

  description: 'Accepts text and creates a new Todo',

  inputs: {
    body: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      description: 'The todo was added successfully',
    },
    notFound: {
      statusCode: 404,
      description: 'Todo with specified id not found',
    },
    error: {
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {

    try {
      const newTodo  = await Todo.create({
        body: inputs.body
      }).fetch()

      return exits.success({
        status: "ok",
        data: newTodo,
      });

    } catch (error) {
      console.error(error)
      return exits.error({
        status: "error",
        message: "Something went wrong",
      })
    }
  }


};
