import React from 'react'

export default function ChatMessage(props) {
     let message = props.message
     // console.log(',ess', message)
     return (
          <div className={`avatar client chat-message d-flex ${message?.user === 'gpt' && 'chatgpt'}`}>
               <div className={`avatar client ${message?.user === 'gpt' && 'chatgpt'}`}>

                    {message.user === 'gpt' ?  <img style={{ borderRadius: '10px' }} src='https://i.pravatar.cc/45' alt='avatar' />
 : <img style={{ borderRadius: '10px' }} src='https://i.pravatar.cc/50' alt='avatar' />}
               </div>
               <div className='message'>
                    {message.message}
               </div>
          </div>
          // <>tests</>
     )
}
