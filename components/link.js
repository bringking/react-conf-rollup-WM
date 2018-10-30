import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.dark ? 'white': '#00CDBE'};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
`;

export default function Link(props) {
  const {dark, ...rest} = props;
  return (
    <A {...rest} dark={dark}/>
  );
}
