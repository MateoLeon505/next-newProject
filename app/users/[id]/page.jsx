import React from 'react'
import Link from 'next/link'

const getUser = async (id) => {

    const res = await fetch(`https://reqres.in/api/users/${id}`) 
    const data = await res.json()
    return data.data
}

const UserPage = async ({params}) => {
    const id= params.id
    const user = await getUser(id)

    return (
        <div className='bg-slate-400 rounded-md p-10'>
            <Link href='/'>Back</Link>
            <img src={user.avatar} className='m-auto my-4 rounded-md' alt={`${user.first_name} ${user.last_name}`}/>
            <h3 className='text-3xl font-bold'>{user.id}. {user.first_name} {user.last_name}</h3>
            <p className='text-slate-50'>Email: {user.email}</p>
        </div>
    )
}

export default UserPage