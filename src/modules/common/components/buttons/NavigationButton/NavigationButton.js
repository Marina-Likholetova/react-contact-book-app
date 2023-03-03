import React from 'react'
import { Button } from "@mui/material";

export default function NavigationButton({ label, onClick = () => {} }) {
  return (
      <Button
          variant="outlined"
          fullWidth
          sx={{ textTransform: "none" }}
          type="submit"
          onClick={onClick}
      >
          {label}
      </Button>
  )
}
