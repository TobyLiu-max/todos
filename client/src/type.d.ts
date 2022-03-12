interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface IFormData {
  name: string
  description: string
}

interface TodoProps {
    todo: ITodo
}
