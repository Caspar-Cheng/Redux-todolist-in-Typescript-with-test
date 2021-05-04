import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/user/action-creators';

const useActions = (): typeof actionCreators => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
