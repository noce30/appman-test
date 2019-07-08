import React from 'react';
import { shallow } from 'enzyme';
import Pokedexes from '../../../components/pokedexes';

describe('<Pokedexes />', () => {
  it('should render Pokedexes component', () => {
    const wrapper = shallow(<Pokedexes />);
    expect(wrapper.find('.pokedexes')).toHaveLength(1);
  });
});