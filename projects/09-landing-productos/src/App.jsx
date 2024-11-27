import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ItemProducts } from "./components/ItemProducts";
import './style.css'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ItemProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;