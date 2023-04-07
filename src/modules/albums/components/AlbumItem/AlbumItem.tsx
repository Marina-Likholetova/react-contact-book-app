import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import useAppSelector from 'modules/common/hooks/useSelector';
import { fetchPhotos } from '../../slices/photosSlice';
import ImageItem from '../ImageItem/ImageItem';
import "./AlbumItem.css";
import useAppDispatch from 'modules/common/hooks/useDispatch';


type Props = {}

const AlbumItem: React.FC<Props> = () => {
    const photos = useAppSelector(state => state.photos.value);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchPhotos({params: {albumId: id}}))
    }, [id])

  return (
      <div className="album">
          {photos &&
              photos.map((photo) => (
                    <ImageItem key={photo.id} {...photo} />
              ))}
      </div>
  );
}

export default AlbumItem