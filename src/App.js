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
  const [titulo2, setNuevoti] = useState("");
  const [descripcion2, setNuevade] = useState("");
  const [responsable2, setNuevore] = useState("");
  const [prioridad2, setNuevapri] = useState("");
  const [id, setnuevoID] = useState(null);



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

    const nuevaTarea2 = {
      titulo: titulo2,
      descripcion: descripcion2,
      responsable: responsable2,
      prioridad: prioridad2,
    };

    if (id) {
      const docRef = doc(db, "tareas", id);
      await updateDoc(docRef, nuevaTarea2);
      setnuevoID("");
      setNuevoti("");
      setNuevade("");
      setNuevapri("");
      setNuevore("");
    } else {
      await addDoc(tareasColeccionRef, nuevaTarea); //guarda la tarea en la firestore
      setNuevoTitulo("");
      setNuevaDescripcion("");
      setNuevaPrioridad("");
      setNuevoResponsable("");
    }
    setGuardado(true);
    
    
   
  }

  

const eliminarClick = async (item) => {
  if (window.confirm("¿Estás seguro de que quieres eliminar esto?")) {
    const docRef = doc(db, "tareas", item.id);
    await deleteDoc(docRef);
  }
  setGuardado(true);
  };
  
  const editarClick = (item) => {
    setnuevoID(item.id);
    console.log(item.id);
    console.log(item.titulo);
    setNuevoti(item.titulo);
    setNuevade(item.descripcion);
    setNuevore(item.responsable);
    setNuevapri(item.prioridad);
  };


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
          <Actualizar
            guardarRegistro={guardarRegistro}
            setNuevoTitulo={setNuevoti}
            setNuevaDescripcion={setNuevade}
            setNuevoResponsable={setNuevore}
            setNuevaPrioridad={setNuevapri}
            titulo={titulo2}
            descripcion={descripcion2}
            responsable={responsable2}
            prioridad={prioridad2}
          />
        </div>
      </div>

      <Tareas
        tareas={tareas}
        eliminarClick={eliminarClick}
        editarClick={editarClick}
      />
    </div>
  );
}

export default App;
