// NutriScoreSection.tsx
"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
} from "@mui/material";

interface NutriScoreSectionProps {
  selectedProduct: any; // Replace "any" with a proper type if available
}

const NutriScoreSection: React.FC<NutriScoreSectionProps> = ({ selectedProduct }) => {
  if (!selectedProduct || !selectedProduct.nutriscore) {
    return <Typography variant="body2">No NutriScore data available.</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">NutriScore</Typography>

        {/* Display 2021 NutriScore Data if available */}
        {selectedProduct.nutriscore["2021"] && (
          <>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              2021 NutriScore
            </Typography>
            <Typography>
              Grade:{" "}
              <Chip
                label={selectedProduct.nutriscore["2021"].grade?.toUpperCase() || "N/A"}
                color={
                  selectedProduct.nutriscore["2021"].grade === "a"
                    ? "success"
                    : selectedProduct.nutriscore["2021"].grade === "e"
                    ? "error"
                    : "default"
                }
              />
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total Score: {selectedProduct.nutriscore["2021"].score || "N/A"}
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />

            {/* Display raw data from 2021 */}
            <Typography variant="body2">
              Energy: {selectedProduct.nutriscore["2021"].data.energy || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.energy_points || "N/A"})
            </Typography>
            <Typography variant="body2">
              Fiber: {selectedProduct.nutriscore["2021"].data.fiber || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.fiber_points || "N/A"})
            </Typography>
            <Typography variant="body2">
              Proteins: {selectedProduct.nutriscore["2021"].data.proteins || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.proteins_points || "N/A"})
            </Typography>
            <Typography variant="body2">
              Saturated Fat: {selectedProduct.nutriscore["2021"].data.saturated_fat || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.saturated_fat_points || "N/A"})
            </Typography>
            <Typography variant="body2">
              Sodium: {selectedProduct.nutriscore["2021"].data.sodium || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.sodium_points || "N/A"})
            </Typography>
            <Typography variant="body2">
              Sugars: {selectedProduct.nutriscore["2021"].data.sugars || "N/A"} (Points: {selectedProduct.nutriscore["2021"].data.sugars_points || "N/A"})
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />
            <Typography variant="body2">
              Total Positive Points: {selectedProduct.nutriscore["2021"].data.positive_points || "N/A"}
            </Typography>
            <Typography variant="body2">
              Total Negative Points: {selectedProduct.nutriscore["2021"].data.negative_points || "N/A"}
            </Typography>
          </>
        )}

        {/* Display 2023 NutriScore Data if available */}
        {selectedProduct.nutriscore["2023"] && (
          <>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              2023 NutriScore
            </Typography>
            <Typography>
              Grade:{" "}
              <Chip
                label={selectedProduct.nutriscore["2023"].grade?.toUpperCase() || "N/A"}
                color={
                  selectedProduct.nutriscore["2023"].grade === "a"
                    ? "success"
                    : selectedProduct.nutriscore["2023"].grade === "e"
                    ? "error"
                    : "default"
                }
              />
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total Score: {selectedProduct.nutriscore["2023"].score || "N/A"}
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />

            {/* Display positive components for 2023 */}
            <Typography variant="body2">Positive Components:</Typography>
            {selectedProduct.nutriscore["2023"].data.components?.positive?.map((comp: any, index: number) => (
              <Typography key={index} variant="body2">
                {comp.id}: {comp.points} points (Max: {comp.points_max} {comp.unit})
              </Typography>
            ))}
            <Divider sx={{ margin: "10px 0" }} />

            {/* Display negative components for 2023 */}
            <Typography variant="body2">Negative Components:</Typography>
            {selectedProduct.nutriscore["2023"].data.components?.negative?.map((comp: any, index: number) => (
              <Typography key={index} variant="body2">
                {comp.id}: {comp.points} points (Max: {comp.points_max} {comp.unit})
              </Typography>
            ))}
            <Divider sx={{ margin: "10px 0" }} />

            <Typography variant="body2">
              Total Positive Points: {selectedProduct.nutriscore["2023"].data.positive_points || "N/A"} (Max: {selectedProduct.nutriscore["2023"].data.positive_points_max || "N/A"})
            </Typography>
            <Typography variant="body2">
              Total Negative Points: {selectedProduct.nutriscore["2023"].data.negative_points || "N/A"} (Max: {selectedProduct.nutriscore["2023"].data.negative_points_max || "N/A"})
            </Typography>
            <Divider sx={{ margin: "10px 0" }} />
            <Typography variant="body2">
              Protein Status: {selectedProduct.nutriscore["2023"].count_proteins || "N/A"} - {selectedProduct.nutriscore["2023"].count_proteins_reason || "N/A"}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default NutriScoreSection;
