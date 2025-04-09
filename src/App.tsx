import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';

import './App.css'

interface user {
  id: number,
  userName: string,
  age: number
}

function App() {
  const [users, setUsers] = useState<user[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const data = await axios.get('http://localhost:8080/api/v1/users')
    console.log(data)
  }

  return (
    <>
      <h1>:3</h1>
    </>
  )
}

export default App
