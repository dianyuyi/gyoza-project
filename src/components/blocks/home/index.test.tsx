/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import '@testing-library/jest-dom'
// import { StoreContainer } from './styled'

import styled from 'styled-components'
// import tw from 'twin.macro'

const StoreContainer = styled.div`
  display: block;
`

test('it works', () => {
  const { container } = render(<StoreContainer />)
  expect(container).toMatchSnapshot()
})
