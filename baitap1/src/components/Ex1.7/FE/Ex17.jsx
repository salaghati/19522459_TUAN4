import React, { useState } from 'react'
import { useMessages } from './useMessages'

export default function Ex17() {
    const [forum, setForum] = useState('nasa')
    const {
        data: messages,
        loading: messagesLoading,
        error: messageError,
    } = useMessages(forum)

  return (
    <>
        <h3 style={{color: "red"}}>Ex 1.7</h3>
        <button onClick={() => setForum('nasa')}>NASA</button>
        <button onClick={() => setForum('notNasa')}>Not NASA</button>
        {messageError ? (
            <div className='error'>
                Something went wrong:
                <div className='error-contents'>
                    {messageError.message}
                </div>
            </div>
        ) : messagesLoading ? (
            <div className='loading'>Loading...</div>
        ) : messages && messages.length ? (
            <dl>
                {messages.map((m) => (
                    <>
                        <dt>{m.author}</dt>
                        <dd>{m.text}</dd>
                    </>
                ))}
            </dl>
        ) : (
            'No messages'
        )}     
    </>
  )
}
