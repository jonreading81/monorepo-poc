import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the header text', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Header')).toBeTruthy();
  });

  it('should have the footer text', () => {
    const { getByText } = render(<Index />);
    expect(getByText('footer')).toBeTruthy();
  });
});
