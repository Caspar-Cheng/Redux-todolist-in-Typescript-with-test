/* eslint-disable @typescript-eslint/no-explicit-any */
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../store/user/action-creators';
import ActionType from '../store/user/action-type';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('has an action to add a form', () => {
  it('has a form to add', () => {
    const form = {
      id: 9,
      description: 'test',
      category: 'css',
      content: 'test content',
    };
    const expectedAction = { type: ActionType.SEARCH_FORM_SUCCESS, form };

    expect(actions.addForm(form)).toEqual(expectedAction);
  });

  it('has an action to delete a form', () => {
    const index = 1;
    const expectedAction = { type: ActionType.DELETE_FORM_SUCCESS, index };

    expect(actions.deleteForm(index)).toEqual(expectedAction);
  });
});

describe('async fetch forms action', () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({ forms: [] });
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_FORMS_SUCCESS when fetching has been done', () => {
    fetchMock.getOnce('/forms', {
      body: {
        forms: [
          { name: 'a', value: 'hi, a' },
          { name: 'b', value: 'hi, b' },
        ],
      },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [
      { type: ActionType.FETCH_FORMS },
      {
        type: ActionType.FETCH_FORMS_SUCCESS,
        body: {
          forms: [
            { name: 'a', value: 'hi, a' },
            { name: 'b', value: 'hi, b' },
          ],
        },
      },
    ];

    return store.dispatch(actions.fetchForms('/forms')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
