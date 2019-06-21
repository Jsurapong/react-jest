import React from 'react';
import { create } from 'react-test-renderer';

import Users from '../src/components/Users';

//Leanne Graham
//Ervin Howell

describe('Users component', () => {
  it('shows a list of users', async () => {
    const component = create(<Users />);
    const instance = component.getInstance();

    await instance.componentDidMount();

    const root = component.root;

    const listOfLi = root.findAll(element => element.type === 'li');

    expect(listOfLi[0].props.children).toBe('Leanne Graham');
    expect(listOfLi[1].props.children).toBe('Ervin Howell');
  });
});
