import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const voteId = async (anecdote) => {
  const newAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }
  const response = await axios.put(`${baseUrl}/${newAnecdote.id}`, newAnecdote)
  return response.data
}

const createNew = async (newContent) => {
  const getId = () => (100000 * Math.random()).toFixed(0)

  const asObject = (anecdote) => ({
    content: anecdote,
    id: getId(),
    votes: 0,
  })

  const newAnecdote = asObject(newContent)
  console.log(newAnecdote)
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

export default { getAll, createNew, voteId }
