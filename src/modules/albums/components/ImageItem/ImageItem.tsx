import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useImageCheck from "modules/common/hooks/useImageCheck";
import "./ImageItem.css";

type Props = {
    id: number;
    title: string;
    thumbnailUrl: string;
};

const ImageItem: React.FC<Props> = ({ id, title, thumbnailUrl }) => {
    const { urlChecked } = useImageCheck(thumbnailUrl);

    return (
        <div key={id} className="photo">
            {urlChecked ? (
                <img src={urlChecked} alt={title}/>
            ) : (
                <Box sx={{ display: "grid", minHeight: "100%", placeItems: "center", padding: "1rem" }}>
                    <CircularProgress />
                </Box>
            )}
        </div>
    );
};
export default ImageItem;
