import React, { useEffect } from 'react';
import { loadUserData } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Div100vh from 'react-div-100vh';

import createHashHistory from '../../history';
import Sidebar from '../Sidebar/Sidebar';
import SendMessage from '../SendMessage/SendMessage';
import Header from '../Header/Header';
import Messages from '../Messages/Messages';

export default function Dashboard() {

  // Get State from Redux Store
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Listens for changes on isSignedIn
  // Gets initial user data upon change
  useEffect(() => {
    if (!user.isSignedIn) {
      createHashHistory.push('/');
    }
    else
      dispatch(loadUserData(user.userId));

  }, [dispatch, user.isSignedIn, user.userId])


  return (
    <Div100vh>
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
    </Div100vh>
  )
}
