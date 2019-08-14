import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import { getInitialData } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Messages from '../Messages/Messages';
import SendMessage from '../SendMessage/SendMessage';
import Header from '../Header/Header';

function App() {

  // Get user store
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Listens for changes on isSignedIn
  // Gets initial user data upon change
  useEffect(() => {
    if (user.isSignedIn)
      dispatch(getInitialData(user.userId));
  }, [dispatch, user])


  return (
    <ThemeProvider theme={theme}>
      <div className="grid-container">

        <div className="sidebar-grid">
          <Sidebar />
        </div>

        <div className="messages-grid">
          <Header />
          <Messages />
        </div>

        <div className="send-messages-grid">
          <SendMessage />
        </div>

      </div >
    </ThemeProvider>
  );
}

export default App;



const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "16px",
        backgroundColor: 'black'
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#202225',
        color: 'white'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#36393E',
        position: 'absolute'
      }
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#7289da'
    },
    secondary: {
      main: '#3ca374'
    }
  },
  typography: {
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 600
  }

});