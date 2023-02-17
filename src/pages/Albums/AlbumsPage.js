import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useMatches } from "react-router";
import { Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";
import { fetchAlbums } from "../../store/slices/albums/albumsSlice";
import useNavigation from "../../hooks/useNavigation";


export default function AlbumsPage() {
    const { value: albums, error, loading, actionText } = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const [, albumsPath] = useMatches();
    const { moveToUser } = useNavigation();

    useEffect(() => {
        dispatch(fetchAlbums({ userId }));
    }, [userId]);

    return (
        <Layout
            error={error}
            loading={loading}
            actionText={actionText}
            sidebar={() => (
                <>
                    <List to={albumsPath.pathname} list={albums} />
                    {userId && (
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ textTransform: "none" }}
                            onClick={() => {
                                moveToUser(userId);
                            }}
                        >
                            Back to the user
                        </Button>
                    )}
                </>
            )}
        />
    );
}
