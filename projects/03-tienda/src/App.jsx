import { useState } from "react";
import "./App.css";
import logo from "./assets/aeie-logo.png";
import { ItemSidebar } from "./components/ItemSidebar";
import { ItemSearch } from "./components/ItemSearch";
import { ItemProducts } from "./components/ItemProducts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <ItemSidebar />
        <main className="content">
          <img className="logo" src={logo} alt="aeie" />

          <ItemSearch />
          <ItemProducts />
        </main>
      </div>
    </div>
  );
}

export default App;
