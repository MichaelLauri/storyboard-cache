import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../client/components/Content.jsx';
// import { faItalic } from '@fortawesome/free-solid-svg-icons';

//put this is its own file?
configure({ adapter: new Adapter() });

describe('Content component unit tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Content />);
  });
  it('includes 1 div with the class "eventContent"', () => {
    expect(wrapper.find('div.eventContent').to.have.lengthOf(1));
  });
  it('should render header with the text "Comments"', () => {
    const header = wrapper.find('h4');
    const result = header.text();

    expect(header).toBe(true);
  });
  it('includes 1 div with the class "messages"', () => {
    expect(wrapper.find('div.messages').to.have.lengthOf(1));
  });
});
