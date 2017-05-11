import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import GoalContainer from '../components/GoalContainer';

describe('GoalContainer', () => {
  it('should render the GoalContainer', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<GoalContainer />);
    const output = renderer.getRenderOutput().type;
    console.log(output);
    expect(output).toEqual('div');
  });
});
