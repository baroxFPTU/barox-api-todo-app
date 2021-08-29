module.exports = {
    saveTodo: async (todo) => {
        try {
            const newTodo = await todo.save();
            res.json(newTodo);

        } catch (error) {
            res.json({
                message: 'Cannot create new todo'
            })
        }
    }
}