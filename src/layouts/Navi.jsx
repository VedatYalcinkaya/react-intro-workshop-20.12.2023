import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="huge"inverted fixed="top">
        <Container>
          <Menu.Item name="Todo List" />

          <Menu.Menu position="right">
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
