import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import { useAppDispatch } from './redux/store'
import { demoApi } from './redux/service'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()
  const state = useSelector((state) => state)
  const handleCheckDispatch = () => {
    dispatch(demoApi())
  }
  console.log(state, "state")
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          handleCheckDispatch()
        }}>
          count is {count}
        </button>
        <Button variant='loki'></Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
