/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, Menu, MenuItem, MenuProps,
} from '@material-ui/core';
import { Archive as ArchiveIcon, KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { RoutingProps } from '../../pages';
import { UnstyledLink } from './NavBar.styles';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: '1rem',
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
    'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {},
  },
});

interface DropdownMainMenuProps {
  options: RoutingProps[];
  name: string;
}

export default function DropdownMainMenu({ options, name }:DropdownMainMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ flex: 1 }}>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        {name}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
        options.map((option) => (
          <MenuItem onClick={handleClose} disableRipple>
            <UnstyledLink to={option.path}>
              <ArchiveIcon />
              {option.path}
            </UnstyledLink>
          </MenuItem>
        ))
      }

      </StyledMenu>
    </div>
  );
}
