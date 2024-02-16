import React from 'react'
import Users from '@/components/users'

const getData = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data

}

const Home = async () => {

  const users = await getData()
  console.log(users);

  return (
    <div >
      <Users users={users}/>
    </div>
  )
}

export default Home