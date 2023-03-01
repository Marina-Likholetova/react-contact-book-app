import React from 'react'
import { Box, LinearProgress } from "@mui/material";

export default function Loader() {
  return (
      <Box sx={{ width: "100%", padding: 1, margin: "1rem 0" }}>
        <LinearProgress />
      </Box>
  );
}
