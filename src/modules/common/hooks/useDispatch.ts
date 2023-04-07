import { useDispatch } from 'react-redux';
import { AppDispatch } from './../../../store/storeConfig';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;