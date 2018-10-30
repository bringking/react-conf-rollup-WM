// @flow
import React from 'react'
import {Flex} from '@rebass/grid';

export default ({ children }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'white'
    }}>
    {children}
  </Flex>
)
