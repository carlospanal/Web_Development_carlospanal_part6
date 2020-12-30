/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { voterReducer } from '../reducers/anecdoteReducer'
import { changeReducer } from '../reducers/notificationReducer'

const Anecdotes = (props) => {
  const { anecdotes, filter } = props
  const iniAnecdotes = anecdotes
  const sortedAnecdotes = (() => {
    if (iniAnecdotes.length > 1) {
      return iniAnecdotes.sort((a, b) => ((a.votes > b.votes) ? -1 : 1))
    }
    return iniAnecdotes
  })()

  const vote = (id) => {
    const votedAnecdote = sortedAnecdotes.filter((anecdote) => anecdote.id === id)
    props.voterReducer(votedAnecdote[0])
    /* dispatch(changeReducer(`you have voted ${votedAnecdote[0].content}`))
    setTimeout(() => {
      dispatch(hideReducer())
    }, 5000)
    */
    props.changeReducer(`you voted '${votedAnecdote[0].content}'`, 2000)
  }

  if (iniAnecdotes.length > 0) {
    const filteredAnecdotes = sortedAnecdotes.filter(
      (anecdote) => anecdote.content.includes(filter),
    )
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
Anecdotes.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  voterReducer: PropTypes.func.isRequired,
  changeReducer: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes,
  filter: state.filter,
})

const mapDispatchToProps = {
  voterReducer,
  changeReducer,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes
