import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('bae03e13-9e2e-44ca-b619-2cc4d13cf609', props.user.username, props.user.secret)
  return (
    <div style= {{height: '100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style= {{height: '100%'}}/>
    </div>
  )
}

export default ChatsPage
