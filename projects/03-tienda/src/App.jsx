import { useState } from 'react'
import './App.css'
import logo from './assets/aeie-logo.png'
import { ItemSidebar } from './components/ItemSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='container'>
        <ItemSidebar/>
        <main className='content'>
          <img className='logo' src={logo} alt='aeie'/>
        </main>
      </div>      
    </div>
  )
}

export default App
