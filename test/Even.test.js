import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../src/components/Button';

describe('Button component', () => {
  test('it shows the expected text when clicked (testing the wrong way!)', () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);

    const rootInstance = component.root;

    const button = rootInstance.findByType('button');

    button.props.onClick();

    expect(button.props.children).toBe('PROCEED TO CHECKOUT');
  });
});
