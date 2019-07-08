import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../../components/login';

describe('<Login />', () => {
  it('should render Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.clearfix')).toHaveLength(1);
  });

  it('render an `.action`', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.action')).toHaveLength(1);
  });
});