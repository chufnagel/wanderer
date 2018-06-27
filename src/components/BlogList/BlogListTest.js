/* global expect, it, describe, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BlogList from './BlogList';

describe('BlogList component', () => {
  it('Should render successfully', () => {
    const component = shallow(<BlogList />);
    expect(component.exists()).toEqual(true);
  });
});
