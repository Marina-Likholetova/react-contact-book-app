import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPhotos } from '../../store/slices/photos/photosSlice';
import ImageItem from '../ImageItem/ImageItem';
import Loader from '../Loader/Loader';
import "./AlbumItem.css";



export default function AlbumItem() {
    const { value: photos, loading }= useSelector(state => state.photos);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchPhotos({albumId: Number(id)}))
    }, [id])

  return (
      <>
          {(photos && !loading)
            ? <div className='album'>
                {photos.map((photo) => <ImageItem key={photo.id} {...photo} />)}
            </div>
            : <Loader />}
      </>
  );
}
