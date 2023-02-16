import { useHistory } from "react-router";
import { USERS_PATH, ALBUMS_PATH, ALBUMS_BY_USER_ID_PATH } from '../constants/api';

export default function useNavigation() {
    const history = useHistory();

  const moveForward = () => history.goForward();
  const moveBackward = () => history.goBack();
  const moveToUsers = () => history.push(USERS_PATH);
  const moveToUser = (id) => history.push(`${USERS_PATH}/${id}`);
  const moveToAlbums = () => history.push(ALBUMS_PATH);
  const moveToAlbumsByUserId = (id) => history.push(ALBUMS_BY_USER_ID_PATH + id)
  const moveTo = (path) => history.push(path);
  
  return { moveForward, moveBackward, moveToUsers, moveToUser, moveToAlbums, moveToAlbumsByUserId, moveTo }
}
