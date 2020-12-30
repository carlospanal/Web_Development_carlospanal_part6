const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGEFILTER': {
    return action.data.newFilter
  }
  default: return state
  }
}

export const changeReducer = (newFilter) => (
  {
    type: 'CHANGEFILTER',
    data: { newFilter },
  }
)

export default filterReducer
