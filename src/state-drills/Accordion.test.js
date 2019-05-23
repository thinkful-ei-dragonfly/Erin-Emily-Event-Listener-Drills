import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15';
import Accordion from './Accordion';
import { exportAllDeclaration } from '@babel/types';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe(`Accordion Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty li element if no props', () => {
    const tree = renderer
      .create(<Accordion />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders no sections as active by default', () => {
    const tree = renderer
      .create(<Accordion sections={sectionsProp}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders section content when component is clicked', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders only the last section open when multiple are clicked', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp}/>)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })

});