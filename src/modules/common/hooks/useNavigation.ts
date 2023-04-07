import { useNavigate, NavigateFunction } from "react-router";
import { USERS_PATH, ALBUMS_PATH, ALBUMS_BY_USER_ID_PATH } from "../constants/api";
import { Id } from 'entities/user/index';

export default function useNavigation() {
  const navigate:NavigateFunction = useNavigate();

  const moveForward = () => navigate(+1);
  const moveBackward = () => navigate(-1);
  const moveToUsers = () => navigate(USERS_PATH);
  const moveToUser = (id: Id) => navigate(`${USERS_PATH}/${id}`);
  const moveToAlbums = () => navigate(ALBUMS_PATH);
  const moveToAlbumsByUserId = (id: Id) => navigate(ALBUMS_BY_USER_ID_PATH + id)
  const moveTo = (path: string) => navigate(path);
  
  return { moveForward, moveBackward, moveToUser, moveToUsers, moveToAlbums, moveToAlbumsByUserId, moveTo }
}
