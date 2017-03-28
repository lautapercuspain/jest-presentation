// Exporting it for test purposes
export const LOAD_REPOS_REQUEST = 'REQUEST';
export const LOAD_REPOS_FAILURE = 'FAILURE';
export const LOAD_REPOS_SUCCESS = 'SUCCESS';
export const SELECT_REPO = 'SELECT';

export const initialState = {    
  error: null,
  isLoading: false,
  loaded: false,
  repos: null,
  selected: null,
}; 

export default function repos(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS_FAILURE:
      return {...state, error: action.error};
    case LOAD_REPOS_REQUEST:
      return {...state, isLoading: true};
    case LOAD_REPOS_SUCCESS:
      return {...state, repos: action.data, loaded:true};
    case SELECT_REPO:
      return {...state, selected:true};
    default:
      return state;
  }
}