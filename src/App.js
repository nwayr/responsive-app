import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Profile from "./components/Profile";
import FormSection from "./components/Form";
import ProductFilter from "./components/ProductFilter";
import Footer from "./components/Footer"; // Import Footer
import About from "./pages/about";
import InventoryManagement from "./pages/inventory";

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const handleFormSubmit = (formData) => {
    setSubmissions((prev) => [...prev, formData]);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <Box
        sx={{
          maxWidth: "1600px",
          margin: "auto",
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: darkMode ? "#001f3f" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile darkMode={darkMode} />
                <FormSection onSubmit={handleFormSubmit} darkMode={darkMode} />
                <ProductFilter darkMode={darkMode} />
              </>
            }
          />
          <Route
            path="/about"
            element={<About submissions={submissions} darkMode={darkMode} />}
          />
          <Route
            path="/inventory"
            element={<InventoryManagement darkMode={darkMode} />}
          />
        </Routes>
        <br />
        <Footer darkMode={darkMode} />
      </Box>
    </Router>
  );
};

export default App;
