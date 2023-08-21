import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonGroupRow } from './button-group.composition';

it('should render with text', () => {
  const { getAllByText } = render(<BasicButtonGroupRow />);
  const buttons = getAllByText((content, element) => content.startsWith("Button"));
  expect(buttons[0]).toBeTruthy();
  expect(buttons[1]).toBeTruthy();
});
