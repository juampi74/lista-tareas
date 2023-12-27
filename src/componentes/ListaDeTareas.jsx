import React, { useState } from "react";
import Formulario from "./Formulario.jsx";
import Tarea from "./Tarea.jsx";
import "../hojas-de-estilo/ListaDeTareas.css";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((item) => {
      if (item.id === id) {
        item.completada = !item.completada;
      }
      return item;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((item) => item.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="lista-tareas-contenedor">
        {tareas.map((item) => (
          <Tarea
            key={item.id}
            id={item.id}
            texto={item.texto}
            completada={item.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
