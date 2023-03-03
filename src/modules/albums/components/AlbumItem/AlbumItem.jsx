import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPhotos } from '../../slices/photosSlice';
import ImageItem from '../ImageItem/ImageItem';
import "./AlbumItem.css";



export default function AlbumItem() {
    const photos = useSelector(state => state.photos.value);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchPhotos({albumId: Number(id)}))
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
