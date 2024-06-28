import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/index.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/index.js"

const Formulario = (props) => {
    
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        //console.log("Manejar el envío", evento)
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        } //Es lo mismo que poner nombre: nombre, puesto: puesto, foto: foto; mientras llave y valor tengan el mismo nombre JS lo entiende
        registrarColaborador(datosAEnviar)
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo="Nombre" placeholder="nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos} />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
            <Campo titulo="Título" placeholder="título" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo="Color" placeholder="el color en Hex" required valor={color} actualizarValor={actualizarColor} type="color" />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario