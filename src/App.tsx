import {BrowserRouter} from 'react-router-dom';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

import Header from './components/Header';
import Router from './routers/router';

import {Provider} from 'react-redux';

import store from './store';

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
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
