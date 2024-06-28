import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map(callback)
    // const equipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"]

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value) //Le envía al elemento padre (el formulario) el value del select
    }

    return <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> ) }
            </select>
        </div>
}

export default ListaOpciones