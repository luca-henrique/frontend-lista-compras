import {AppBar} from '@material-ui/core';

import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static' color='primary'>
      <div className='header'>
        <Link to='/'>
          <p className='title-header'>Lista de Compras</p>
        </Link>
      </div>
    </AppBar>
  );
};

export default Header;
