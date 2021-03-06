import React from 'react';
import Link from '../src/components/Link';
import { create } from 'react-test-renderer';

describe('Test Snapshot', () => {
  test('Link changes the class when hovered', () => {
    const component = create(
      <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
