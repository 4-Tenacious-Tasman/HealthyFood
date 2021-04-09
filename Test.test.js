import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Profile from './client/src/component/userinfo/UserProfile.jsx';

// test('adds 3 to equal 3', () => {
//   expect(3).toBe(3);
// });

describe('Profile', () => {
  test('should render', () => {
    const component = mount(<Profile />);
    console.log(component.debug());
  });
});