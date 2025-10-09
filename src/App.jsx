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
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="page-title">Dynamic Page Title</h2>
        <input type="text"
          value={name}
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", fontSize: "1.2em" }}
        />
        <button className='btn-reset' onClick={() => setName('')}
          style={{ padding: "10px", fontSize: "1.2em", marginLeft: "10px" }}>Reset</button>
      </div>
      <div>
      <h4 style={{textAlign: "center", marginTop: "20px", fontStyle: "italic"  }}>Type your name in the above box to see it in the browser tab</h4>
      </div>

    </>
  )
}

export default App
