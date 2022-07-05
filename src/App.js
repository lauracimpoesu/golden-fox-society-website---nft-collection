import "./App.css"
import { useState } from "react"
import Minting from './Minting'
import Nav from './Nav'

function App() {
  const [accounts, setAccounts] = useState([])

  return (
    <div className="overlay">
    <div className="App">
      <Nav accounts={accounts}
        setAccounts={setAccounts} />
      <Minting accounts={accounts}
        setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>
  )
}

export default App 