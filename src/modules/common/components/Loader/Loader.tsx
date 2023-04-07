import React from 'react'
import { Box, LinearProgress } from "@mui/material";

type Props = {}

const Loader: React.FC<Props> = () => {
  return (
      <Box sx={{ width: "100%", padding: 1, margin: "1rem 0" }}>
        <LinearProgress />
      </Box>
  );
}

export default Loader
