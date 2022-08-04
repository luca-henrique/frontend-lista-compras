import {createTheme} from '@material-ui/core/styles';

import {ThemeProvider} from '@material-ui/styles';

import Header from './components/Header';
import Home from './pages/Home';

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
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
