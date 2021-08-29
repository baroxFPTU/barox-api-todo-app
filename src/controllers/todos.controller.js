const Todo = require('../models/Todo');

class TodosController {
    // Get all todos
    async getAll (req, res){
        try {
            const todos = await Todo.find();
            res.json(todos);
        } catch (error) {
            res.json({error: error})
        }
    }

    // Get todo follow id
    getById (req, res) {
      res.json({
          id: req.params.id
      })
    }

    // Create new todo
    async create (req, res) {
        const data = req.body;

        // If data not empty
        if (Object.keys(data).length !== 0) {
            // Init new todo
            let todo = new Todo({
                todo: data.todo,
            })

            // Save todo to db
            try {
                todo = await todo.save();
                res.json(todo);

            } catch (error) {
                res.json({
                    message: 'Cannot create new todo'
                })
            }

            return;
        }

        // If data empty
        res.json({
            message: 'error'
        })
    }
}

module.exports = new TodosController();