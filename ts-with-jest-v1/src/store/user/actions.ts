import ActionType from './action-type';

interface APIRequest {
  type:
    | ActionType.FETCH_FORMS
    | ActionType.SUBMIT_FORM
    | ActionType.DELETE_FORM
    | ActionType.SEARCH_FORM
    | ActionType.UPDATE_FORM;
}

interface FetchSuccess {
  type: ActionType.FETCH_FORMS_SUCCESS;
  payload: Record<string, unknown>[];
}

interface APIError {
  type:
    | ActionType.FETCH_FORMS_FAILURE
    | ActionType.SUBMIT_FORM_FAILURE
    | ActionType.DELETE_FORM_FAILURE
    | ActionType.SEARCH_FORM_FAILURE
    | ActionType.UPDATE_FORM_FAILURE;
  payload: string;
}

interface PostUpdateSuccess {
  type: ActionType.SUBMIT_FORM_SUCCESS | ActionType.UPDATE_FORM_SUCCESS;
  payload: Record<string, unknown>;
}

interface SearchSuccess {
  type: ActionType.SEARCH_FORM_SUCCESS;
  payload: Record<string, unknown>[] | Record<string, unknown>;
}

interface DeleteSuccess {
  type: ActionType.DELETE_FORM_SUCCESS;
  payload: string | number;
}

type Actions =
  | APIRequest
  | FetchSuccess
  | APIError
  | PostUpdateSuccess
  | SearchSuccess
  | DeleteSuccess;

export default Actions;
