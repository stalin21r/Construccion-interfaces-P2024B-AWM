
export function ItemRegistroAsistencia() {
  return(
    <section className="form-section">
        <h2 className="form-title">Registro de Asistencia</h2>
        <p className="form-description">Complete los detalles de su turno para registrar la asistencia.</p>
        <form>
          <section className="section-form">
            <label for="arrival-time">Hora de llegada</label>
            <input type="time" id="arrival-time" className="form-input"></input>

            <label for="departure-time">Hora de salida</label>
            <input type="time" id="departure-time" className="form-input"/>
          </section>

          <section className="section-form">
            <label>¿La persona a la que releva estuvo presente?</label>
          <div className="radio-group">
            <label><input type="radio" name="releve-present" value="yes"/> Sí</label>
            <label><input type="radio" name="releve-present" value="no"/> No</label>
          </div>
          </section>
          
          <section className="section-form">
            <label>¿La persona que lo reemplazará estuvo presente antes de su salida?</label>
          <div className="radio-group">
            <label><input type="radio" name="replacement-present" value="yes"/> Sí</label>
            <label><input type="radio" name="replacement-present" value="no"/> No</label>
          </div>
          </section>
          

          <button type="submit" className="submit-button">Registrar Asistencia</button>
        </form>
      </section>
  )
}