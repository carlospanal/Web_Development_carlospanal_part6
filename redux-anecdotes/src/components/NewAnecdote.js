import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdoteReducer } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    // eslint-disable-next-line no-param-reassign
    event.target.anecdote.value = ''
    dispatch(newAnecdoteReducer(content))
  }

  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewAnecdote
