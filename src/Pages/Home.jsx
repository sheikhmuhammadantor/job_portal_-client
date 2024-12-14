import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

function Home() {

  const {user, age} = useContext(AuthContext)

  return (
    <div>
      <h1>Home</h1>
      <h1>{user}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default Home
