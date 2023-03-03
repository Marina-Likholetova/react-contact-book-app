import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useImageLoaded from "modules/common/hooks/useImageLoaded";
import "./ImageItem.css";



export default function ImageItem({ id, title, thumbnailUrl }) {
    const [ref, loading, onLoad, onError] = useImageLoaded();

    return (
        <div key={id} className="photo">
            {loading && (
                <Box sx={{ display: "grid", minHeight: "100%", placeItems: "center", padding: "1rem" }}>
                    <CircularProgress />
                </Box>
            )}
            <img ref={ref} src={thumbnailUrl} alt={title} onError={onError} onLoad={onLoad} />
        </div>
    );
}
