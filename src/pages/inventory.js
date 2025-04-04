import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  IconButton,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Delete, ExpandMore } from "@mui/icons-material";

const initialCategories = ["Electronics", "Clothing", "Accessories"];
const initialProducts = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Clothing", name: "T-Shirt" },
  { id: 3, category: "Accessories", name: "Watch" },
];

const InventoryManagement = ({ darkMode }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);
  const [newCategory, setNewCategory] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "" });

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: "", category: "" });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: darkMode ? "#00264d" : "#f5f5f5", // Background color based on dark mode
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: darkMode ? "#bbdefb" : "#1976d2" }}
      >
        Inventory Management
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: darkMode ? "#1e1e1e" : "#e3f2fd" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ color: darkMode ? "#bbdefb" : "#0d47a1" }}
              >
                Manage Categories
              </Typography>
              <TextField
                label="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                fullWidth
                margin="normal"
                InputProps={{
                  style: { color: darkMode ? "#ffffff" : "#000000" }, // Input text color
                }}
                InputLabelProps={{
                  style: { color: darkMode ? "#bbdefb" : "#000000" }, // Input label color
                }}
              />
              <Button
                onClick={handleAddCategory}
                variant="contained"
                style={{ backgroundColor: "#1976d2", color: "#ffffff" }}
              >
                Add Category
              </Button>
              {categories.map((category) => (
                <Accordion key={category} style={{ marginTop: 10 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                      style={{ color: darkMode ? "#1976d2" : "#000000" }}
                    >
                      {category}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {products
                      .filter((product) => product.category === category)
                      .map((product) => (
                        <Card
                          variant="outlined"
                          key={product.id}
                          style={{
                            marginBottom: 10,
                            backgroundColor: darkMode ? "#2c2c2c" : "#ffffff", // Card background color
                            color: darkMode ? "#ffffff" : "#000000", // Card text color
                          }}
                        >
                          <CardContent>
                            <Typography>{product.name}</Typography>
                          </CardContent>
                          <CardActions>
                            <IconButton
                              onClick={() => handleDeleteProduct(product.id)}
                              style={{ color: "#d32f2f" }}
                            >
                              <Delete />
                            </IconButton>
                          </CardActions>
                        </Card>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: darkMode ? "#1e1e1e" : "#e8f5e9" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ color: darkMode ? "#bbdefb" : "#1b5e20" }}
              >
                Manage Products
              </Typography>
              <TextField
                label="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                fullWidth
                margin="normal"
                InputProps={{
                  style: { color: darkMode ? "#ffffff" : "#000000" }, // Input text color
                }}
                InputLabelProps={{
                  style: { color: darkMode ? "#bbdefb" : "#000000" }, // Input label color
                }}
              />
              <Select
                fullWidth
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                displayEmpty
                style={{
                  marginBottom: 10,
                  color: darkMode ? "#ffffff" : "#000000",
                }} // Select text color
              >
                <MenuItem value="">Select Category</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <Button
                onClick={handleAddProduct}
                variant="contained"
                style={{ backgroundColor: "#388e3c", color: "#ffffff" }}
              >
                Add Product
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InventoryManagement;
