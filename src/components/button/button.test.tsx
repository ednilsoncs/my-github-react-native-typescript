/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './index';

describe('@component/button', () => {
  test('#render button with text', () => {
    const { getByText } = render(<Button>Teste</Button>);
    expect(getByText('Teste')).toBeTruthy();
  });
  test('#render button without text', () => {
    const { getByText } = render(<Button />);
    expect(getByText('')).toBeTruthy();
  });
});
