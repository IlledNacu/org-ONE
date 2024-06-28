import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `Ingresar ${props.placeholder}...`

    //Destructuración
    const { type = "text" } = props //tomo el atributo type de props; en caso de que type venga indefinido le pasamos un valor por defecto: text

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value)
    }
    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio} type={type} />
    </div>
}

export default Campo