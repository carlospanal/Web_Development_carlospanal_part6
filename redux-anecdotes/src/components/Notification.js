import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification.content)
  const visible = useSelector((state) => state.notification.visible)
  let display
  if (visible) { display = 'block' } else { display = 'none' }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display,
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
