import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voterReducer } from '../reducers/anecdoteReducer'
import { changeReducer } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const iniAnecdotes = useSelector((state) => state.anecdotes)

  const anecdotes = (() => {
    if (iniAnecdotes.length > 1) {
      return iniAnecdotes.sort((a, b) => ((a.votes > b.votes) ? -1 : 1))
    }
    return iniAnecdotes
  })()
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  const vote = (id) => {
    const votedAnecdote = anecdotes.filter((anecdote) => anecdote.id === id)
    dispatch(voterReducer(votedAnecdote[0]))
    /* dispatch(changeReducer(`you have voted ${votedAnecdote[0].content}`))
    setTimeout(() => {
      dispatch(hideReducer())
    }, 5000)
    */
    dispatch(changeReducer(`you voted '${votedAnecdote[0].content}'`, 2000))
  }

  if (iniAnecdotes.length > 0) {
    console.log(anecdotes)
    const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filter))
    return (
      <div>
        <h2>Anecdotes</h2>
        {filteredAnecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has
              {' '}
              {anecdote.votes}
              <button type="button" onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default Anecdotes
