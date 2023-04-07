import React, { useEffect } from "react";
import { useParams, useMatches } from "react-router";
import Layout from "modules/common/components/Layout/Layout";
import List from "modules/common/components/List/List";
import { fetchAlbums } from "../slices/albumsSlice";
import useNavigation from "modules/common/hooks/useNavigation";
import NavigationButton from "modules/common/components/buttons/NavigationButton/NavigationButton";
import useAppSelector from "modules/common/hooks/useSelector";
import useAppDispatch from "modules/common/hooks/useDispatch";


export default function AlbumsPage() {
    const { value: albums, error, loading, actionText } = useAppSelector((state) => state.albums);
    const dispatch = useAppDispatch();
    const { userId } = useParams();
    const [, albumsPath] = useMatches();
    const { moveToUser } = useNavigation();


    useEffect(() => {
        dispatch(fetchAlbums({params: { userId }}));
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
                        <NavigationButton
                            label="Back to the user"
                            onClick={() => {
                                moveToUser(userId);
                            }}
                        />
                    )}
                </>
            )}
        />
    );
}
