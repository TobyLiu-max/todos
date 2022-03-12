import { Request, Response } from 'express'
import Todo from '../../models/todo'

const getTodos = async (req:Request, res:Response):Promise<void> => {
  const todos = await Todo.find()
  res.send({
    code: 200,
    todos
  })
}

const addTodo = async (req:Request, res:Response):Promise<void> => {
  const todo = {
    name: req.body.name,
    description: req.body.description
  }
  await Todo.create(todo)
  res.send({
    code: 200
  })
}

const updateTodo = async (req:Request, res:Response):Promise<void> => {
  const id = req.params.id
  await Todo.findByIdAndUpdate(id, req.body)
  res.send({
    code: 200
  })
}

const deleteTodo = async (req:Request, res:Response):Promise<void> => {
  const id = req.params.id
  await Todo.findByIdAndDelete(id)
  res.send({
    code: 200
  })
}

export { getTodos, addTodo, updateTodo, deleteTodo }
