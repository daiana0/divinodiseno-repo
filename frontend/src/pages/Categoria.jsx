import React, { useEffect, useState } from "react";
import axios from "axios";

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categorias"
        );

        setCategorias(response.data.data);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };
    getCategorias();
  }, []);

  return (
    <div>
      {categorias.length === 0 ? (
        <p>No hay categorías para mostrar</p>
      ) : (
        categorias.map((categoria) => (
          <div key={categoria.id}>
            <h3>{categoria.nombre}</h3>
            {categoria.imagenUrl && (
              <img src={categoria.imagenUrl} alt={categoria.nombre} />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Categoria;
