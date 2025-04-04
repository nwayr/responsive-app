import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  CardMedia,
} from "@mui/material";

const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Laptop",
    image: "/images/laptop.jpg",
  },
  { id: 2, category: "Clothing", name: "T-Shirt", image: "/images/tshirt.jpg" },
  {
    id: 3,
    category: "Electronics",
    name: "Smartphone",
    image: "/images/smartphone.jpg",
  },
  { id: 4, category: "Clothing", name: "Jeans", image: "/images/jeans.jpg" },
  { id: 5, category: "Accessories", name: "Watch", image: "/images/watch.jpg" },
  {
    id: 6,
    category: "Accessories",
    name: "Sunglasses",
    image: "/images/sunglasses.jpg",
  },
];

const ProductFilterWithImages = ({ darkMode }) => {
  const [category, setCategory] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div style={{ maxWidth: 800, margin: "auto", marginTop: 20 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color={darkMode ? "#ffffff" : "#000000"}
      >
        Items
      </Typography>
      <Select
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        sx={{ marginBottom: 2 }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: darkMode ? "#424242" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            },
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Accessories">Accessories</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                backgroundColor: darkMode ? "#424242" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{
                  opacity: hoveredProduct === product.id ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  color={darkMode ? "#ffffff" : "#000000"}
                >
                  {product.name}
                </Typography>
                <Typography color={darkMode ? "#ffffff" : "text.secondary"}>
                  {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductFilterWithImages;
