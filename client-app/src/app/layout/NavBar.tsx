import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img
            src="/assets/Images/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item as={NavLink} to="/errors" name="Errors" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
