import * as React from "react";
import { useState, useEffect } from "react";
import { url_server } from "../../App";
import axios from "axios";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { withRouter } from "react-router-dom";

import "./product-edit.styles.scss";

const theme = createTheme();

const ProductEditPage = ({ match, history }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState({
    p_id: "",
    name: "",
    description: "",
    price: "",
    availability: "",
  });

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${url_server}/products`);
      const products = await response.json();
      const filteredProduct = products.filter(
        (product) => product.p_id === match.params.id
      )[0];
      setProduct(filteredProduct);
    }

    fetchProducts();
  }, [match]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(product);
    event.preventDefault();
    axios
      .patch(`${url_server}/products`, {
        p_id: product.p_id,
        name: product.name,
        description: product.description,
        price: product.price,
        availability: product.availability,
      })
      .then(function (response) {
        history.push("/products");
      })
      .catch(function (error) {
        setErrorMessage("Error: No se pudo actualizar el producto");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit product
          </Typography>
          {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputLabel>Name</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              autoComplete="name"
              value={product.name}
              onChange={handleChange}
            />
            <InputLabel>Description</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              type="description"
              id="description"
              value={product.description}
              autoComplete="current-description"
              onChange={handleChange}
            />
            <InputLabel>Price</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              type="price"
              id="price"
              value={product.price}
              autoComplete="current-price"
              onChange={handleChange}
            />
            <InputLabel>Stock</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="availability"
              type="availability"
              id="availability"
              inputProps={{
                step: "1",
              }}
              value={product.availability}
              autoComplete="current-availability"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update product
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default withRouter(ProductEditPage);
