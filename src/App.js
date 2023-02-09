import { db } from './Firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import './App.css';
import { useEffect, useState } from 'react';
import Tareas from './components/Tareas';
function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setNuevoTitulo] = useState("");
  const [descripcion, setNuevaDescripcion] = useState("");
  const [responsable, setNuevoResponsable] = useState("");
  const [prioridad, setNuevaPrioridad] = useState("");
  const [guardado,setGuardado]=useState("")
  

  const tareasColeccionRef = collection(db, "tareas");

  useEffect(() => {
    async function getTareas() {
      const data = await getDocs(tareasColeccionRef);
      setTareas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      //console.log(data)
    }
    setGuardado(false)
    getTareas();
  }, [guardado]);

  const guardarRegistro = async (event) => {
    event.preventDefault();
    const nuevaTarea = {
      titulo, descripcion, responsable, prioridad
    }
    /*const nuevaTarea={
      "titulo":titulo,"descripcion":descripcion,"responsable":responsable,"prioridad":prioridad
    }
    */
    await addDoc(tareasColeccionRef, nuevaTarea);//guarda la tarea en firestore
    setGuardado(true)
  }
  return (
    <div className="App">
      <form onSubmit={guardarRegistro}>
        <input type='text' placeholder='Titulo' onChange={(event) => setNuevoTitulo(event.target.value)} />
        <input type='text' placeholder='Descripcion' onChange={(event) => setNuevaDescripcion(event.target.value)} />
        <input type='text' placeholder='Responsable' onChange={(event) => setNuevoResponsable(event.target.value)} />
        <input type='text' placeholder='Prioridad' onChange={(event) => setNuevaPrioridad(event.target.value)} />
        <p><button className='btn btn-primary' >Guardar</button></p>
      </form>
      <Tareas tareas={tareas} />
    </div>
  );
}

export default App;
