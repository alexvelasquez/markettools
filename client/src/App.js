import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import states from './routes/routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { esES } from '@material-ui/core/locale';

const plugins = [
  pushStateLocationPlugin
];

function App() {


    const theme = createMuiTheme({
      palette: {
        primary: { main: '#CD4D44' },
      },
    }, esES);

  return (
    <UIRouter plugins={plugins} states={states}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <UIView />
        </ThemeProvider>
      </CssBaseline>
    </UIRouter>
  );
}

export default connect(null, null)(App);
