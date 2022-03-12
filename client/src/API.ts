import axios, { AxiosResponse } from 'axios'

const baseUrl = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse> => {
  const todos: AxiosResponse<ITodo> = await axios.get(baseUrl + '/todos')
  return todos
}

export const addTodo = async (formData: IFormData): Promise<AxiosResponse> => {
  const todo = {
    name: formData.name,
    description: formData.description,
    status: false
  }
  const saveTodo: AxiosResponse<ITodo> = await axios.post(
    baseUrl + '/add-todo',
    todo
  )
  return saveTodo
}

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse> => {
  const todoUpdate = {
    status: true
  }
  const updatedTodo: AxiosResponse<ITodo> = await axios.put(
        `${baseUrl}/edit-todo/${todo._id}`,
        todoUpdate
  )
  return updatedTodo
}

export const deleteTodo = async (_id: string): Promise<AxiosResponse> => {
  const deletedTodo: AxiosResponse<ITodo> = await axios.delete(
        `${baseUrl}/delete-todo/${_id}`
  )
  return deletedTodo
}
