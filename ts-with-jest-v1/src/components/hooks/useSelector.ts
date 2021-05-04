import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/root-reducer';

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export default useSelector;
