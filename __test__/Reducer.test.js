import repos, { initialState, 
    LOAD_REPOS_REQUEST, 
    LOAD_REPOS_FAILURE, 
    LOAD_REPOS_SUCCESS,
    SELECT_REPO } from '../reducers/reducer';

it('Should test my reducer', () => { 
    expect(initialState).toMatchSnapshot();
    //console.log(repos(initialState, {type:LOAD_REPOS_REQUEST}));
});

it('Should handle load repo action ', () => {
    const modifiedReducer = repos(initialState ,{type:LOAD_REPOS_REQUEST});
    expect(modifiedReducer).toMatchSnapshot();
});

it('Should handle failure repo action', () => {
    const expectedState = {
      ...initialState,
      isLoading: false,
      error:'Error'
    };
    expect(repos(initialState, {error: 'Error', type:LOAD_REPOS_FAILURE})).toEqual(expectedState);
});

it('Should handle success repo action', () => {
    const expectedState = {
      ...initialState,
      repos: [],
      isLoading: false,
      loaded: true
    };
    expect(repos(initialState, {type:LOAD_REPOS_SUCCESS, data:[]})).toEqual(expectedState);
});

it('Should handle select repo action', () => {
    const expectedState = {
      ...initialState,
      selected: true
    };
    expect(repos(initialState, {type:SELECT_REPO})).toEqual(expectedState);
});