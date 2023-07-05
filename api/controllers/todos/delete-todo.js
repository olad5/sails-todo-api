module.exports = {


  friendlyName: 'Delete todo',


  description: 'Delete the todo with the specified id',


  inputs: {
    id: {
      description: 'The id of the todo',
      type: 'number',
      required: true,
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


  fn: async function ({ id }, exits) {

    try {
    const found  = await Todo.findOne({
      id
    })

    if (!found) {
      return exits.notFound({
        error: `Todo with id ${id} was not found`,
      });
    }

    await Todo.destroyOne({
      id
    })

    return exits.success({
      status: "ok",
      data: "Todo deleted successfully",
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
