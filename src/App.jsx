import { useState, useEffect } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = name ? `Hello ${name}` : 'Please enter your name'
  }, [name])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dynamic Page Title</h2>
      <input type="text"
        value={name}
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", fontSize: "1.2em" }}
        />
        <button onClick={() => setName('')}
          style={{ padding: "10px", fontSize: "1.2em", marginLeft: "10px" }}>Reset</button>
    </div>
  )
}

export default App
