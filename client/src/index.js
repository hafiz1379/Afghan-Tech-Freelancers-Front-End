import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import AddGig from './pages/addgig/AddGig';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/gig/:id', element: <Gig /> },
      { path: '/gigs', element: <Gigs /> },
      { path: '/orders', element: <Orders /> },
      { path: '/mygigs', element: <MyGigs /> },
      { path: '/addgig', element: <AddGig /> },
      { path: '/messages', element: <Messages /> },
      { path: '/message/:id', element: <Message /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/pay/:id', element: <Pay /> },
      { path: '/success', element: <Success /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
