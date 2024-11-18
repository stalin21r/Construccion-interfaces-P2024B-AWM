import panchitos from "../assets/panchitos.png";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export function ItemProducts() {
  const product = {
    id: 1,
    name: "Panchitos",
    price: "0.50",
    image: panchitos, // Directamente pasamos la variable
  };

  const products = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(
        <button
          key={i}
          className="product"
          data-name={product.name}
          data-price={product.price}
          data-image={product.image}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Costo: ${product.price}</p>
        </button>
      );
    }
    return result;
  };

  return (
    <div className="product-editor-container">
      <div className="grid">{products()}</div>

      <Stack spacing={2} className="paginator">
        <Pagination
          count={10}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
        />
      </Stack>
    </div>
  );
}
