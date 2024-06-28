import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Desestructuración
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    //Esto es lo mismo que:
    // colorPrimario = props.datos.colorPrimario
    // colorSecundario = props.datos.colorSecundario
    // titulo = props.datos.titulo
    
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const estiloFondo = { backgroundColor: hexToRgba(colorPrimario, 0.6) } //hexToRgba es un paquete instalado que le das un color y una opacidad y te devuelve el mismo color en otro tono de opacidad
    const estiloTitulo = { borderColor: colorPrimario }

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={estiloFondo}>
            {/* Para usar estilos en línea, utilizamos los nombres de los atributos de CSS pero aquellos que tienen guión se sustituye el guión por el que la palabra siguiente empiece con mayúscula */}
            <input type="color" className="input-color" value={colorPrimario} onChange={(evento)=>{actualizarColor(evento.target.value, id)}} />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like} /> )}
                {/* <Colaborador /> */}
            </div>
        </section>
    }</>
}

export default Equipo