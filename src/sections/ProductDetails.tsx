import React from "react";
import { Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import NutriScoreSection from "./Nutriscore";

interface ProductDetailsProps {
  selectedProduct: any;
}

const generateChartData = (labels: string[], values: number[], label: string) => ({
  labels,
  datasets: [
    {
      label,
      data: values,
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
});

const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedProduct }) => {
  if (!selectedProduct) return null;

  return (
    <Grid container spacing={3} sx={{ marginTop: "20px" }}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">{selectedProduct.product_name || "Product Name"}</Typography>
            <img src={selectedProduct.image_url} alt={selectedProduct.product_name} style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: "10px" }}>
              Brand: {selectedProduct.brands || "N/A"}
            </Typography>
            <Chip label={`Quantity: ${selectedProduct.quantity || "N/A"}`} color="primary" sx={{ marginTop: "10px" }} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Nutritional Breakdown</Typography>
            <Bar
              data={generateChartData(
                ["Energy (kcal)", "Fat (g)", "Sugars (g)", "Salt (g)"],
                [selectedProduct.nutriments?.energy_kcal || 0, selectedProduct.nutriments?.fat || 0, selectedProduct.nutriments?.sugars || 0, selectedProduct.nutriments?.salt || 0],
                "Nutrition Per 100g"
              )}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <NutriScoreSection selectedProduct={selectedProduct} />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
