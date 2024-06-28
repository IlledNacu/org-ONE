import { useState } from 'react';
import { v4 as uuid } from 'uuid'; //Esto es responsabilidad del backend en un caso real
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {id: uuid(), equipo:"Front End", foto: "https://github.com/harlandlohora.png", nombre: "Harland Lohora", puesto: "Instructor", fav: true},
    {id: uuid(), equipo:"Programación", foto:"https://github.com/JeanmarieAluraLatam.png", nombre:"Jean Marie", puesto:"Instructora", fav: false},
    {id: uuid(), equipo:"Front End", foto:"https://github.com/IlledNacu.png", nombre:"Illed Huilén", puesto:"Desarrolladora", fav: true},
    {id: uuid(), equipo:"UX y Diseño", foto:"https://github.com/JoseDarioGonzalezCha.png", nombre:"Jose Dario Gonzalez", puesto:"Instructor", fav: false},
    {id: uuid(), equipo:"Innovación y Gestión", foto:"https://github.com/christianpva.png", nombre:"Christian Velasco", puesto:"Dev FullStack", fav: true}
  ])
  const [equipos, actualizarEquipos] = useState([
    {id: uuid(), titulo:"Programación", colorPrimario:"#57C278", colorSecundario:"#D9F7E9"}, 
    {id: uuid(), titulo:"Front End", colorPrimario:"#82CFFA", colorSecundario:"#E8F8FF"}, 
    {id: uuid(), titulo:"Data Science", colorPrimario:"#A6D157", colorSecundario:"#F0F8E2"}, 
    {id: uuid(), titulo:"Devops", colorPrimario:"#E06B69", colorSecundario:"#FDE7E8"}, 
    {id: uuid(), titulo:"UX y Diseño", colorPrimario:"#DB6EBF", colorSecundario:"#FAE9F5"}, 
    {id: uuid(), titulo:"Móvil", colorPrimario:"#FFBA05", colorSecundario:"#FFF5D9"}, 
    {id: uuid(), titulo:"Innovación y Gestión", colorPrimario:"#FF8A29", colorSecundario:"#FFEEDF"}
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator --> hacemos una copia de los elementos actuales y le agregamos el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id )
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos
  // const equipos = [{titulo:"Programación", colorPrimario:"#57C278", colorSecundario:"#D9F7E9"}, {titulo:"Front End", colorPrimario:"#82CFFA", colorSecundario:"#E8F8FF"}, {titulo:"Data Science", colorPrimario:"#A6D157", colorSecundario:"#F0F8E2"}, {titulo:"Devops", colorPrimario:"#E06B69", colorSecundario:"#FDE7E8"}, {titulo:"UX y Diseño", colorPrimario:"#DB6EBF", colorSecundario:"#FAE9F5"}, {titulo:"Móvil", colorPrimario:"#FFBA05", colorSecundario:"#FFF5D9"}, {titulo:"Innovación y Gestión", colorPrimario:"#FF8A29", colorSecundario:"#FFEEDF"}]

  // Ternario --> condicion ? true : false
  // { mostrarFormulario ? <Formulario /> : <></> }

  // Otra forma aún más simplificada: condicion && seMuestra (si se cumple la condición, seMuestra)

  return (
    <div>
      {/* {Header()}
      <Header></Header> */}
      <Header />
      { mostrarFormulario && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} /> )
      }

      <Footer />
    </div>
  );
}

export default App;
