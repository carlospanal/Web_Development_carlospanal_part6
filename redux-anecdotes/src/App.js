import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { hideReducer } from './reducers/notificationReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  useEffect(() => {
    setTimeout(() => (dispatch(hideReducer())), 2000)
  }, [dispatch])

  return (
    <div>
      <Filter />
      <Anecdotes />
      <Notification />
      <NewAnecdote />
    </div>
  )
}

export default App
