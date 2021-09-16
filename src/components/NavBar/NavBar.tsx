/* eslint-disable react/jsx-props-no-spreading */
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import DropdownMainMenu from './DropdownMainMenu';
import { axieRoutes, geneSearchRoutes, singleRoutes } from '../../pages';
import { UnstyledLink } from './NavBar.styles';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {singleRoutes.map((route) => (
          <Typography variant="h6" component="div" style={{ flex: '1' }}>
            <UnstyledLink to={route.path} key={route.path}>
              {route.path}
            </UnstyledLink>
          </Typography>
        ))}
        <DropdownMainMenu options={geneSearchRoutes} name="Parents Search" />
        <DropdownMainMenu options={axieRoutes} name="Single Axies" />
      </Toolbar>
    </AppBar>
  );
}
