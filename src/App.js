import { db } from './Firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './App.css';
import { useEffect } from 'react';

function App() {
  const tareasColeccionRef = collection(db, "tareas");

  useEffect(() => {
    async function getTareas() {
      const data = await getDocs(tareasColeccionRef);
      console.log(data)
    }
    getTareas();
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
