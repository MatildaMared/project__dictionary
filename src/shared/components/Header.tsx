import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./../../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "./../../assets/images/icon-moon.svg";

function Header() {
  const [font, setFont] = useState("sans-serif");

  return (
    <Container>
      <Logo />
      <UserChoices>
        <DropDown>
          <select
            name="font"
            id="font"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </DropDown>
        <ThemeToggle>
          <Button>
            <MoonIcon fill="currentColor" stroke="currentColor" />
          </Button>
        </ThemeToggle>
      </UserChoices>
    </Container>
  );
}

const Container = styled.header`
  border: 1px solid hotpink;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  padding-block: var(--spacing-l);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropDown = styled.div`
  padding-inline-end: var(--spacing-s);
  border-right: 1px solid var(--color-gray-300);
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle = styled.div`
  padding-inline-start: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  color: var(--color-primary);
`;

const UserChoices = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
`;

export default Header;
