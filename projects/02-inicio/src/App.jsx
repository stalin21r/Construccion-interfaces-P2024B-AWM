import { useState } from 'react'
import './App.css'
import logo from './assets/aeie-logo.png'
import { ItemSidebar } from './components/ItemSidebar'
import { ItemInicio } from './components/ItemInicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='container'>
        <ItemSidebar/>
        <main className='content'>
          <img className='logo' src={logo} alt='aeie'/>
          <ItemInicio/>
        </main>

      </div>

    </div>
  )
}

export default App
