'use client'
import React from 'react'

const Users = ({users}) => {

    console.log(users);

    const handleOnClick = () => {

    }

  return (
    <ul>
    {users.map((user) =>(
      <li key={user.id} className='bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between'>
        <div>
          <h5 className='font-bold'>{user.id}. {user.first_name} {user.last_name}</h5>
          <p className='text-slate-50'>Email: {user.email}</p>              
        </div>
        <img src={user.avatar} className='rounded-full w-20' alt={`${user.first_name} ${user.last_name}`}/>
      </li>
    ))}
  </ul>
  )
}

export default Users