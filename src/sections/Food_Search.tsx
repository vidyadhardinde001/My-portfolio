"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CircularProgress,
  Divider,
  Chip,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip as ChartTooltip, Legend } from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, ChartTooltip, Legend);

const FoodSearch: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [foodData, setFoodData] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFoodDetails = async () => {
    setLoading(true);
    setFoodData(null);
    setError("");
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${productName}.json`
      );
      if (response.data.status === 1 && response.data.product) {
        setFoodData(response.data.product);
      } else {
        setError("Product not found.");
      }
    } catch (err) {
      setError("Failed to fetch data.");
    }
    setLoading(false);
  };

  const generateChartData = (labels: string[], values: number[], label: string) => ({
    labels,
    datasets: [
      {
        label,
        data: values,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product barcode"
          style={{ padding: "10px", width: "300px", borderRadius: "4px" }}
        />
        <Button
          variant="contained"
          onClick={fetchFoodDetails}
          sx={{ marginLeft: "10px", padding: "10px 20px" }}
        >
          Search
        </Button>
      </Box>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {foodData && (
        <Grid container spacing={3}>
          {/* Product Overview */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">{foodData.product_name || "Product Name"}</Typography>
                <img
                  src={foodData.image_url}
                  alt={foodData.product_name}
                  style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
                />
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: "10px" }}>
                  Brand: {foodData.brands || "N/A"}
                </Typography>
                <Chip label={`Quantity: ${foodData.quantity || "N/A"}`} color="primary" sx={{ marginTop: "10px" }} />
              </CardContent>
            </Card>
          </Grid>

          {/* Nutrition Chart */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Nutritional Breakdown</Typography>
                <Bar
                  data={generateChartData(
                    ["Energy (kcal)", "Fat (g)", "Sugars (g)", "Salt (g)"],
                    [
                      foodData.nutriments?.energy_kcal || 0,
                      foodData.nutriments?.fat || 0,
                      foodData.nutriments?.sugars || 0,
                      foodData.nutriments?.salt || 0,
                    ],
                    "Nutrition Per 100g"
                  )}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* NutriScore Section */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">NutriScore</Typography>
                <Typography>
                  Grade:{" "}
                  <Chip
                    label={foodData.nutrition_grade_fr?.toUpperCase() || "N/A"}
                    color={foodData.nutrition_grade_fr === "a" ? "success" : "error"}
                  />
                </Typography>
                <Pie
                  data={generateChartData(
                    ["Positive Points", "Negative Points"],
                    [
                      foodData.nutriscore_data?.positive || 0,
                      foodData.nutriscore_data?.negative || 0,
                    ],
                    "NutriScore Components"
                  )}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Details Accordion */}
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Detailed Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ingredients: {foodData.ingredients_text || "Not available"}
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography variant="body1">
                  Allergens: {foodData.allergens || "No allergens listed."}
                </Typography>
                <Typography variant="body1">
                  Packaging: {foodData.packaging || "No packaging info available"}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default FoodSearch;
