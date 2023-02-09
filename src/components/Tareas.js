import React from 'react'

export default function Tareas(props) {
    console.log(props.tareas);
    return (
        <div>


            {props.tareas.map(tarea => {
                return (
                    <div className="col-md-4" key={tarea.id}>
                    <div className="card mt-4">
                      <div className="card header">
                        <h3>{tarea.titulo}</h3>
                        </div>
                      <div className="card-body">
                        <p><strong>{tarea.descripcion}</strong></p> 
                        <p>{tarea.responsable}</p>
                      </div>
                      <div className='card-footer'>
                       <mark>{ tarea.prioridad}</mark> 
                       <p><button className='btn btn-primary' >Eliminar</button></p>

                        </div>

                    </div>
                  </div>
                  /*  <div key={tarea.id}>
                        <h1>{tarea.titulo}</h1>
                        <h2>{tarea.descripcion}</h2>
                        <strong>{tarea.responsable}</strong>
                        <br/>
                        <mark>{tarea.prioridad}</mark>
                    </div>*/
                );
            })
            }
        </div>
    )
}
