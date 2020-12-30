import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { newAnecdoteReducer } from '../reducers/anecdoteReducer'
import { changeReducer } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    // eslint-disable-next-line no-param-reassign
    event.target.anecdote.value = ''
    props.newAnecdoteReducer(anecdoteContent)
    props.changeReducer('new anecdote was added', 2000)
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

NewAnecdote.propTypes = {
  changeReducer: PropTypes.func.isRequired,
  newAnecdoteReducer: PropTypes.func.isRequired,
}
const mapStateToProps = () => ({})

const mapDispatchToProps = {
  changeReducer,
  newAnecdoteReducer,
}

const ConnectedNewAnecdote = connect(mapStateToProps, mapDispatchToProps)(NewAnecdote)
export default ConnectedNewAnecdote
