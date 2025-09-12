import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Autocomplete,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

const categorias = ["Categorias", "Liquidación", "Docentes", "Alumnos"];

const FilterBar = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
  axios
    .get("http://localhost:3000/api/productos")
    .then((res) => {
      setProductos(res.data.data); 
    })
    .catch((err) => {
      console.error("Error al traer productos:", err);
    });
}, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
        gap: 1,
        p: 1,
        pl: 2,
        backgroundColor: "info.main",
      }}
    >
      {categorias.map((categoria, i) => (
        <Button key={i} variant="text" color="secondary" sx={{ minWidth: 60 }}>
          {categoria}
        </Button>
      ))}

      <Autocomplete
        options={productos}
        getOptionLabel={(option) => option.nombre || ""}
        onChange={(e, nuevoValor) => setProductoSeleccionado(nuevoValor)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Buscar producto" size="small" />
        )}
      />

      {productoSeleccionado && (
        <Typography sx={{ ml: 2 }}>
          Producto seleccionado: {productoSeleccionado.nombre}
        </Typography>
      )}
    </Box>
  );
};

export default FilterBar;
