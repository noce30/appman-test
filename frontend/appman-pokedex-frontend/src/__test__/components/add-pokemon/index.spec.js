import React from 'react';
import { shallow } from 'enzyme';
import AddPokemon from '../../../components/add-pokemon';

describe('<AddPokemon />', () => {
  it('should render AddPokemon component', () => {
    const wrapper = shallow(<AddPokemon />);
    expect(wrapper.find('.pokedex')).toHaveLength(1);
  });

  it('renders a link and an input', () => {
    const wrapper = shallow(<AddPokemon />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('.back')).toHaveLength(1);
  });
});