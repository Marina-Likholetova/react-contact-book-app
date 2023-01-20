import React from 'react'
import { Box, LinearProgress } from "@mui/material";

export default function Loader() {
  return (
      <Box sx={{ width: "100%", padding: 3 }}>
        <LinearProgress />
      </Box>
  );
}
