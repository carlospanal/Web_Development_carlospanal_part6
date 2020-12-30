const initialState = {
  content: 'Page was successfully loaded',
  visible: true,
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'CHANGENOTIFICATION': {
    const newState = {
      content: action.data.newNotification,
      visible: true,
    }

    return newState
  }
  case 'HIDENOTIFICATION': {
    const newState = {
      content: state.content,
      visible: false,
    }
    return newState
  }
  default: return state
  }
}
export const hideReducer = () => ({
  type: 'HIDENOTIFICATION',
})

export const changeReducer = (newNotification, msTime) => async (dispatch) => {
  setTimeout(() => (dispatch({
    type: 'HIDENOTIFICATION',
  })), msTime)
  dispatch({
    type: 'CHANGENOTIFICATION',
    data: { newNotification },
  })
}

export default notificationReducer
