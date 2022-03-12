import React, { useState } from 'react'

type Props = {
  saveTodo: (e: React.FormEvent, formData: IFormData) => void
}
const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<IFormData>({ name: '', description: '' })

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log('e.currentTarget', e.currentTarget)
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
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
