import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
        <IoIosCloseCircle onClick={()=>eliminarColaborador(id)} className="eliminar" color="#6278F7" />
        <div className="encabezado" style={{backgroundColor:colorPrimario}} >
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <FaHeart color="#F00" onClick={()=>like(id)} /> : <FaRegHeart onClick={()=>like(id)} /> }
        </div>
    </div>
} 

/*const Colaborador = () => {
    return <div className="colaborador">
        <div className="encabezado">
            <img src="https://github.com/IlledNacu.png" alt="Illed" />
        </div>
        <div className="info">
            <h4>Illed Nacucchio</h4>
            <h5>Instructora</h5>
        </div>
    </div>
}*/

export default Colaborador