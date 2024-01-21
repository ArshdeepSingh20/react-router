import React from 'react'
import {useParams} from 'react-router-dom';

function User() {
    const {id} = useParams();
  return (
    <div className='bg-green-400 text-4xl text-center text-white h-40 p-8'>User: {id} </div>
  )
}

export default User