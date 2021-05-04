import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/todo" style={{ textDecoration: 'none' }}>
            <Button color="inherit">todo</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit">about</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
