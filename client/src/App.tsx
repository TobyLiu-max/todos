import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        fetchTodos()
      })
      .catch(err => console.log(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        fetchTodos()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo fetchTodos={fetchTodos} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  )
}

export default App
