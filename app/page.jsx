import React from 'react'

const getData = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data

}

const Home = async () => {

  const users = await getData()

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
            <div>
              <h5>{user.id}. {user.first_name} {user.last_name}</h5>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home