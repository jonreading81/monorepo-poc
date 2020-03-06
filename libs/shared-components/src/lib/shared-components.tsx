import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedComponentsProps {}

const StyledSharedComponents = styled.div`
  color: pink;
`;

export const SharedComponents = (props: SharedComponentsProps) => {
  return (
    <StyledSharedComponents>
      <h1>Welcome to shared-components component!</h1>
    </StyledSharedComponents>
  );
};

export const Header = () => (
  <header>
    <h1>Header</h1>
  </header>
);

export const Footer = () => (
  <footer>
    <p>footer</p>
  </footer>
);

export default SharedComponents;
