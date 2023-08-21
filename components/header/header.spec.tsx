import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('should render with no errors', () => {
  // const { getByText } = render(<BasicHeader />);
  // const rendered = getByText('hello world!');
  // expect(rendered).toBeTruthy();
  const { getByTestId } = render(<BasicHeader />)
  const header = getByTestId('header')
  expect(header).toBeInTheDocument();
});
