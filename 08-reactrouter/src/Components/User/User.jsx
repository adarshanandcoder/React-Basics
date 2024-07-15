import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='w-full p-4 m-5 bg-gray-600 text-white font-medium text-center'>User : {userid}</div>
  )
}

export default User