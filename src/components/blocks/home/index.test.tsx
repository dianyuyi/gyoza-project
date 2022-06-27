/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import Home from './index'

const store = {
  nameTW: '中文店名',
  nameEN: 'English name',
  shortIntro: '純手工,精心美味烹製,主餐點心皆美味',
  phone: '012345678',
  address: 'address',
}

const homeImages = []

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

test('it works', () => {
  const { container } = render(<Home store={store} homeImages={homeImages} />)
  expect(container).toMatchSnapshot()
})
