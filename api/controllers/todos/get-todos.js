module.exports = {


  friendlyName: 'Get todos',


  description: 'Returns an array of todos',


  inputs: {

  },


  exits: {
    success: {
      description: 'The list of the todos available',
    },
    error: {
      description: 'Something went wrong',
    },
  },


  fn: async function (_, exits) {

    try {
      const allTodos  = await Todo.find()

      return exits.success({
        status: "ok",
        data: allTodos,
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
