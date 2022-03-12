import React, { useState, useRef } from 'react'
import { addTodo } from '../API'

type Props = {
  fetchTodos: () => void
}
const AddTodo: React.FC<Props> = ({ fetchTodos }) => {
  const [formData, setFormData] = useState<IFormData>({ name: '', description: '' })
  const formRef = useRef<HTMLFormElement>(null)

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const handleSaveTodo = (e: React.FormEvent): void => {
    e.preventDefault()
    addTodo(formData)
      .then((res) => {
        const { status } = res
        if (status !== 200) {
          throw new Error('Error! Todo not saved')
        }
        fetchTodos()
        formRef.current && formRef.current.reset()
      })
      .catch(err => console.log(err))
  }

  return (
    <form className='Form' onSubmit={(e) => handleSaveTodo(e)} ref={formRef}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined} >Add Todo</button>
    </form>
  )
}

export default AddTodo
