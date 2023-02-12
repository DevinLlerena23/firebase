import { db } from './Firebase-config';
import { addDoc, collection, getDocs, deleteDoc,doc,updateDoc } from "firebase/firestore";
import './App.css';
import { useEffect, useState } from 'react';
import Tareas from './components/Tareas';
import TareasAdd from './components/TareasAdd';
import Actualizar from './components/Actualizar';

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setNuevoTitulo] = useState("");
  const [descripcion, setNuevaDescripcion] = useState("");
  const [responsable, setNuevoResponsable] = useState("");
  const [prioridad, setNuevaPrioridad] = useState("");
  const [guardado,setGuardado]=useState(false)
  

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
    <div className="App ">
      <div className="row  justify-content-start">
        <div className="col-2">
          <TareasAdd
            titulo={titulo}
            descripcion={descripcion}
            responsable={responsable}
            prioridad={prioridad}
            setNuevoTitulo={setNuevoTitulo}
            setNuevaDescripcion={setNuevaDescripcion}
            setNuevoResponsable={setNuevoResponsable}
            setNuevaPrioridad={setNuevaPrioridad}
            guardarRegistro={guardarRegistro}
          />
        </div>
        <div className="col-2">
          <Actualizar />
        </div>
      </div>

      <Tareas tareas={tareas} />
    </div>
  );
}

export default App;
