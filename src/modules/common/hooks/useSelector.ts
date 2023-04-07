import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../store/storeConfig';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;