import React, { useState } from "react";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";

export function ItemAddProduct() {
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías el envío del formulario
    console.log({ productName, cost, file });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Agregar Producto
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Producto"
          fullWidth
          margin="normal"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label="Costo"
          type="number"
          fullWidth
          margin="normal"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2, mb: 1 }}
        >
          Seleccionar archivo
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          {file ? file.name : "Sin archivos seleccionados"}
        </Typography>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <Button component="a" href="#" variant="contained" color="error">
            Volver
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Agregar Producto
          </Button>
        </section>
      </form>
    </Box>
  );
}
