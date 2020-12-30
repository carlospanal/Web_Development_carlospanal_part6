import anecdoteService from '../services/anecdoteService'
// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'INCREASEVOTES': {
    const votedAnecdote = state.filter((anecdote) => anecdote.id === action.data.id)
    votedAnecdote[0].votes += 1
    const newState = state.filter((anecdote) => anecdote.id !== action.data.id)
      .concat(votedAnecdote)
    return newState
  }
  case 'NEWANECDOTE': {
    const newAnecdote = action.data.content
    const newState = state.concat(newAnecdote)
    console.log(newState)
    return newState
  }
  case 'INIANECDOTES': {
    const iniAnecdotes = action.data.content
    return iniAnecdotes
  }
  default: return state
  }
}

export const voterReducer = (anecdote) => async (dispatch) => {
  const { id } = anecdote
  await anecdoteService.voteId(anecdote)
  dispatch({
    type: 'INCREASEVOTES',
    data: { id },
  })
}
export const newAnecdoteReducer = (anecdoteContent) => async (dispatch) => {
  const content = await anecdoteService.createNew(anecdoteContent)
  dispatch({
    type: 'NEWANECDOTE',
    data: { content },
  })
}
export const initializeAnecdotes = () => async (dispatch) => {
  const content = await anecdoteService.getAll()
  dispatch({
    type: 'INIANECDOTES',
    data: { content },
  })
}

export default anecdoteReducer
