import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import useCounter from '../hooks/use-counter';

const Button = styled.button`
  background: #00CDBE;
  color: white;
  padding: 1rem;
  border: none;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
`;

export default function Counter() {
  const {count, increment} = useCounter();

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box mr="1rem">Count is: { count }</Box>
      <Button onClick={increment}>Increment</Button>
    </Flex>
  );
}
