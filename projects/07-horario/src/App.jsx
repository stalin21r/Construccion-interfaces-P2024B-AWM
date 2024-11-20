import { useState } from 'react'
import './App.css'
import logo from './assets/aeie-logo.png'
import { ItemSidebar } from './components/ItemSidebar'
import { ItemHorario } from './components/ItemHorario'


function App() {

  return (
    <div className='App'>
      <div className="container">
        <ItemSidebar />
        <main className="content">
          <img className="logo" src={logo} alt="aeie" />
          <ItemHorario/>
        </main>
      </div> 
    </div>
  )
}

export default App
