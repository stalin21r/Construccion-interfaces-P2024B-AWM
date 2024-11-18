export function ItemSearch() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form className="search-container" action="#">
        <div className="search-input-container">
          <label htmlFor="category">
            <strong>Categoria</strong>
          </label>
          <select className="search-input" name="category" id="category">
            <option>Snacks</option>
            <option>Comida</option>
            <option>Electrónica</option>
            <option>Juegos</option>
          </select>
        </div>
        <div className="search-input-container">
          <label htmlFor="search">
            <strong>Filtro</strong>
          </label>
          <input className="search-input" placeholder="Busqueda"></input>
        </div>
      </form>

      <div className="search-button-container">
        <button className="search-button">Buscar</button>
        <a href="#" className="search-button">
          Agregar
        </a>
      </div>
    </div>
  );
}
