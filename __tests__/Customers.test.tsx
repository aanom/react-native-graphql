/**
 * @format
 */

import 'react-native';
import React from 'react';
import Customers from '../src/customers'

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('truth', () => {
  it('is true', () => {
    expect(true).toEqual(true);
  });
});

