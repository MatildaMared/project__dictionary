import React from "react";
import styled from "styled-components";

function Header() {
  return <Container>Header</Container>;
}

const Container = styled.header`
  border: 1px solid hotpink;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  padding-block: var(--spacing-l);
`;

export default Header;
