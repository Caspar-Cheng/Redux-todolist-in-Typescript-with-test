/* eslint-disable @typescript-eslint/no-explicit-any */
import Actions from './actions';
import ActionType from './action-type';

interface UserState {
  loading: boolean;
  data: any;
  error: string | null;
}

export const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: Actions
): UserState => {
  switch (action.type) {
    case ActionType.FETCH_FORMS:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_FORMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case ActionType.FETCH_FORMS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case ActionType.SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SUBMIT_FORM_SUCCESS:
      return {
        loading: false,
        data: [action.payload, ...state.data],
        error: '',
      };
    case ActionType.SUBMIT_FORM_FAILURE:
      return {
        loading: false,
        data: [...state.data],
        error: action.payload,
      };
    case ActionType.DELETE_FORM:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_FORM_SUCCESS:
      return {
        loading: false,
        data: state.data.filter((n: Record<string, unknown>) => {
          return n.id !== action.payload;
        }),
        error: '',
      };
    case ActionType.DELETE_FORM_FAILURE:
      return {
        loading: false,
        data: [...state.data],
        error: action.payload,
      };
    case ActionType.UPDATE_FORM:
      return {
        ...state,
        loading: true,
      };
    case ActionType.UPDATE_FORM_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload],
        error: '',
      };
    case ActionType.UPDATE_FORM_FAILURE:
      return {
        loading: false,
        data: [...state.data],
        error: action.payload,
      };
    case ActionType.SEARCH_FORM:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SEARCH_FORM_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case ActionType.SEARCH_FORM_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
