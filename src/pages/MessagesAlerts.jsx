import React from 'react'

export const MessagesAlerts = ({type, alert}) => {
  return (
    <div className={`alert alert-${type}`} role='alert'>
        {alert}
    </div>
  )
}
