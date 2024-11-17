import { useState } from 'react'
import './App.css'
import { ItemSidebar } from './components/ItemSidebar'
import { ItemRegistroAsistencia } from './components/ItemRegistroAsistencia'
import logo from './assets/aeie-logo.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="container">
        <ItemSidebar/>
        <main className='content'>
          <img className='logo' src={logo} alt='aeie' />
          <ItemRegistroAsistencia/>
        </main>
      </div>
      
    </div>
  )
}

export default App
