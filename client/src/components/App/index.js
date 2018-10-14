import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import withSession from '../Session/withSession';
import TipperForComputerLabs from '../TipperForComputerLabs';

import * as routes from '../../constants/routes';
import history from '../../constants/history';

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div>
      <Navigation session={session} />

      <hr />

      <Route
        exact
        path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact
        path={routes.SIGN_UP}
        component={() => <SignUpPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
      <Route
        exact
        path={routes.ADMIN}
        component={() => <AdminPage />}
      />
            <Route
        exact
        path={routes.ADMIN}
        component={() => <AdminPage />}
      />
       <Route
        exact
        path={routes.TIPPER_FOR_COMPUTER_LABS}
        component={() => <TipperForComputerLabs />}
      />

      

      hello


    </div>


  </Router>
);

export default withSession(App);
