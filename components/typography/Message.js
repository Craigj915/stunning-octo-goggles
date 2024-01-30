import React from 'react'

const Error = ({message}) => {
  return (
    <div className='bg-red-500 p-4 rounded-xl'>
        {message}</div>
  )
}
const Success = ({message}) => {
  return (
    <div className='bg-green-500 p-4 rounded-xl'>
        {message}</div>
  )
}

const Message = ({messageType, messageContent}) => {
  return messageType === "error" ? (
      <Error message={messageContent} />
    ) : (
      <Success message={messageContent} />
    );
  
};

export default Message