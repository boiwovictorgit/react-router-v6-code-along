import { useState, useEffect } from "react"
import UserCard from "../components/UserCard"

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>
  })

  return (
    <>
      <header>
        {/* place NavBar here */}
      </header>
      <main>
        <h1>Welcome to the Home Page</h1>
        <p>Below is a list of users fetched from the backend:</p>
        {userList}
          <h1>
              Users 1:
          </h1>
          <p> VICTOR KEMBOI</p>
        
      </main>
    </>
  )
}

export default Home