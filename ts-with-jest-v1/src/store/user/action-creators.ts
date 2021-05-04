/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from 'redux';
import Actions from './actions';
import ActionType from './action-type';
import api from '../../components/shared/api';

export const fetchForms = (url: string) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.FETCH_FORMS,
    });
    return api
      .get(url)
      .then((res) => {
        dispatch({ type: ActionType.FETCH_FORMS_SUCCESS, payload: res.data });
        const totalCount = res.headers['x-total-count'];
        return Math.ceil(totalCount / 5);
      })
      .catch((err) =>
        dispatch({ type: ActionType.FETCH_FORMS_FAILURE, payload: err })
      );
  };
};

export const addForm = (form: unknown) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.SUBMIT_FORM });
    api
      .post(form)
      .then((res) =>
        dispatch({
          type: ActionType.SUBMIT_FORM_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionType.SUBMIT_FORM_FAILURE,
          payload: err.message,
        })
      );
  };
};

export const deleteForm = (id: string | number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.DELETE_FORM });
    api
      .delete(id)
      .then(() =>
        dispatch({
          type: ActionType.DELETE_FORM_SUCCESS,
          payload: id,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionType.DELETE_FORM_FAILURE,
          payload: err.message,
        })
      );
  };
};

export const updateForm = (form: Record<string, unknown>) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.UPDATE_FORM });
    api
      .put(form)
      .then((res) =>
        dispatch({
          type: ActionType.UPDATE_FORM_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionType.UPDATE_FORM_FAILURE,
          payload: err.message,
        })
      );
  };
};

export const searchForm = (content: string) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.SEARCH_FORM });
    api
      .search(content)
      .then((res) =>
        dispatch({
          type: ActionType.SEARCH_FORM_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionType.SEARCH_FORM_FAILURE,
          payload: err.message,
        })
      );
  };
};
