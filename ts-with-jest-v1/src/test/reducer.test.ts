/* eslint-disable jest/valid-expect */
import userReducer, { INITIAL_STATE } from '../store/user/reducer';
import ActionType from '../store/user/action-type';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should hand DELETE_FORM request', () => {
    expect(
      userReducer(undefined, {
        type: ActionType.DELETE_FORM,
      }).toEqual({
        INITIAL_STATE,
        loading: true,
      })
    );
  });

  it('should handle SUBMIT_FORM_SUCCESS', () => {
    expect(
      userReducer(undefined, {
        type: ActionType.SUBMIT_FORM_SUCCESS,
        payload: {
          id: 2,
          description: 'test',
          category: 'css',
          content: 'this is a test',
        },
      }).toEqual({
        loading: false,
        data: [
          {
            id: 2,
            description: 'test',
            category: 'css',
            content: 'this is a test',
          },
          INITIAL_STATE,
        ],
        error: '',
      })
    );
  });

  it('should handle SEARCH_FORM_FAILURE', () => {
    expect(
      userReducer(undefined, {
        type: ActionType.SEARCH_FORM_FAILURE,
        payload: 'Cannot find relevant data.',
      }).toEqual({
        loading: false,
        data: [],
        error: 'Cannot find relevant data.',
      })
    );
  });
});
