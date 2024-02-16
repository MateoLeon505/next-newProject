'use client'
import Link from 'next/link'
import React from 'react'

const Users = ({users}) => {

  return (
    <ul>
    {users.map((user) =>(
        <Link href={`/users/${user.id}`}  key={user.id}>
            <li  className='bg-slate-400 mb-2 p-3 rounded-md text-black flex justify-between'>
                <div>
                    <h5 className='font-bold'>{user.id}. {user.first_name} {user.last_name}</h5>
                    <p className='text-slate-50'>Email: {user.email}</p>              
                </div>
                <img src={user.avatar} className='rounded-full w-20' alt={`${user.first_name} ${user.last_name}`}/>
            </li>
        </Link>
    ))}
  </ul>
  )
}

export default Users