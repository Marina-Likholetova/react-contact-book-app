import React, { useState, useEffect } from 'react'
import { Alert, Snackbar } from "@mui/material";


export default function Toast({ actionText, error }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    
    useEffect(() => {
        if (actionText || error) {
            setOpen(true);
        } else {
            setOpen(false)
        }
    }, [actionText, error]);


  return (
      <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
          <Alert severity={error ? "error" : "success"} sx={{ width: "100%" }}>
              {error ? "Please try again!" : `Successfully ${actionText}!`}
          </Alert>
      </Snackbar>
  );
}
