import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // Hook: useState
    //const [nombreVariable, functionQueActualiza] = useState(valorInicial)
    
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Boton add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg