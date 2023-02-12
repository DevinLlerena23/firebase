import React from "react";

export default function Actualizar(props) {
  return (
    
      <div className="col">
        <form onSubmit={props.guardarRegistro}>
          <div className="card mt-4">
            <div className="card header">
              <h1>Actualizar tarea</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlfor="titulo">Titulo de la tarea </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingresa el tirulo"
                  value={props.titulo}
                  onChange={(event) => props.setNuevoTitulo(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlfor="descripcion">Descripcion </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingrese la descripcion"
                  value={props.descripcion}
                  onChange={(event) =>
                    props.setNuevaDescripcion(event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label htmlfor="responsable">Responsable </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingrese al responsable"
                  value={props.responsable}
                  onChange={(event) =>
                    props.setNuevoResponsable(event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label htmlfor="prioridad">Prioridad </label>
                <input
                  type="text"
                  className="form-control"
                  name="prioridad"
                  placeholder="ingresa la prioridad"
                  value={props.prioridad}
                  onChange={(event) =>
                    props.setNuevaPrioridad(event.target.value)
                  }
                />
              </div>
            </div>

            <div className="card-footer">
              <p>
                <button className="btn btn-danger">Actualizar</button>
              </p>
            </div>
          </div>
        </form>
      
    </div>
  );
}
