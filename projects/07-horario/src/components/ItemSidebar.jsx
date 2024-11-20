import lobo from '../assets/lobo.png'

export function ItemSidebar() {

  return(
    <aside className="sidebar">
      <img className="lobo-aeie" src={lobo} alt="aeie-lobo"/>
      <a href='#'><h2 className="titulo-sidebar">AEIE</h2></a>
      <nav className="menu">
        <a className="menu-item" href="#">Inicio</a>
        <a className="menu-item" href="#">Tienda</a>
        <a className="menu-item" href="#">Casilleros</a>
        <a className="menu-item" href="#">Registro de asistencia</a>
        <a className="menu-item" href="#">Turnos</a>
      </nav>
    </aside>
  )
}