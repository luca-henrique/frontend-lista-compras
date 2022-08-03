import {createTheme} from '@material-ui/core/styles';

import {ThemeProvider} from '@material-ui/styles';

import {AppBar} from '@material-ui/core';

import './style.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='primary'>
        <div className='header'>
          <p className='title'>Lista de Compras</p>
        </div>
      </AppBar>
      <div className='App'>
        <h1>Example</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
