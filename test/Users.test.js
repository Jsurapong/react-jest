import React from 'react';
import { create } from 'react-test-renderer';
import axios from 'axios';

import Users from '../src/components/Users';

const response = {
  data: [{ name: 'Kevin Mitnick' }, { name: 'Valentino Gagliardi' }]
};

jest.mock('axios');

// describe('Users component', () => {
//   it('shows a list of users', async () => {
//     axios.get.mockResolvedValue(response);

//     const component = create(<Users />);
//     const instance = component.getInstance();
//     await instance.componentDidMount();
//     const root = component.root;

//     const listOfLi = root.findAll(element => element.type === 'li');

//     expect(listOfLi[0].props.children).toBe('Kevin Mitnick');
//     expect(listOfLi[1].props.children).toBe('Valentino Gagliardi');
//   });
// });

describe('User Component', () => {
  it('shows a list of users', async () => {
    axios.get.mockResolvedValue(response);
    const component = create(<Users />);
    const instance = component.getInstance();

    await instance.getUser();

    console.log(instance.state);
  });
});
