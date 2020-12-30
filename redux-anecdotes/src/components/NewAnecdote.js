import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdoteReducer } from '../reducers/anecdoteReducer'
import { changeReducer } from '../reducers/notificationReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    // eslint-disable-next-line no-param-reassign
    event.target.anecdote.value = ''
    dispatch(newAnecdoteReducer(anecdoteContent))
    dispatch(changeReducer('new anecdote was added', 2000))
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
