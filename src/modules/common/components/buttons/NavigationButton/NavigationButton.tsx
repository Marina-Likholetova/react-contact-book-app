import React from 'react'
import { Button } from "@mui/material";

type Props = {
    label: string;
    onClick?: () => void
}

const NavigationButton: React.FC<Props> = ({ label, onClick = () => {} }) => {
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

export default NavigationButton;