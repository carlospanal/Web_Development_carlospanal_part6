import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voterReducer } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
  const anecdotes = useSelector((state) => state).sort((a, b) => ((a.votes > b.votes) ? -1 : 1))
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => dispatch(voterReducer(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes
