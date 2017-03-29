import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

describe('It renders the App test ', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});