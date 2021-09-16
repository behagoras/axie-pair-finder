/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;
const Sidebar = styled.div``;
const Content = styled.div``;
const Body = styled.div`
  display:grid;
  grid-template-columns: 200px auto;
  max-height: 85vh;
  overflow-y: scroll;
`;
const Footer = styled.div``;

interface LayoutGeneFinderProps {
  children?: React.ReactNode;
  filtersComponent?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function LayoutGeneFinder({
  children,
  filtersComponent,
  footer,
}: LayoutGeneFinderProps) {
  return (
    <Container>
      <Body>
        <Sidebar>
          {filtersComponent}
        </Sidebar>
        <Content>
          {children}
        </Content>
      </Body>
      <Footer>
        {footer}
      </Footer>
    </Container>
  );
}
