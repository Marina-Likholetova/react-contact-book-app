import { useNavigate } from "react-router";
import { USERS_PATH, ALBUMS_PATH, ALBUMS_BY_USER_ID_PATH } from "../constants/api";


export default function useNavigation() {
  const navigate = useNavigate();

  const moveForward = () => navigate(+1);
  const moveBackward = () => navigate(-1);
  const moveToUsers = () => navigate(USERS_PATH);
  const moveToUser = (id) => navigate(`${USERS_PATH}/${id}`);
  const moveToAlbums = () => navigate(ALBUMS_PATH);
  const moveToAlbumsByUserId = (id) => navigate(ALBUMS_BY_USER_ID_PATH + id)
  const moveTo = (path) => navigate(path);
  
  return { moveForward, moveBackward, moveToUser, moveToUsers, moveToAlbums, moveToAlbumsByUserId, moveTo }
}
