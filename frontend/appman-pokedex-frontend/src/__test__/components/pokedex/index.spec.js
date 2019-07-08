import React from 'react';
import { shallow } from 'enzyme';
import Pokedex from '../../../components/pokedex';

describe('<Pokedex />', () => {
  it('should render Pokedex component', () => {
    const mockProps = { match: { params: { id: '1223' } } }
    const wrapper = shallow(<Pokedex {...mockProps} />);
    expect(wrapper.find('.pokedex')).toHaveLength(1);
  });

  it('render back link', () => {
    const mockProps = { match: { params: { id: '1223' } } }
    const wrapper = shallow(<Pokedex {...mockProps} />);
    expect(wrapper.find('.back')).toHaveLength(1);
  });
});