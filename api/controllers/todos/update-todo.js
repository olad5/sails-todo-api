module.exports = {


  friendlyName: 'Updates todo',


  description: 'Updates a Todo with a specified Id',


  inputs: {
    id: {
      description: 'The id of the todo',
      type: 'number',
      required: true,
    },
    body: {
      description: 'The updated body of the todo',
      type: 'string',
    },
    isDone: {
      description: 'The updated status of the todo',
      type: 'boolean',
    },

  },


  exits: {
    success: {
      description: 'Todo was updated successfully',
    },
    notFound: {
      statusCode: 404,
      description: 'Todo with specified id not found',
    },
    error: {
      description: 'Something went wrong',
    },

  },


  fn: async function ( inputs, exits) {

    try {
      const found  = await Todo.findOne({
        id: inputs.id
      })

    if (!found) {
      return exits.notFound({
        error: `Todo with id ${inputs.id} was not found`,
      });
    }

    const updatedTodo  = await Todo.updateOne({
        id: inputs.id
    }).set({body:inputs.body, isDone:inputs.isDone})

    return exits.success({
      status: "ok",
      data: updatedTodo,
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
