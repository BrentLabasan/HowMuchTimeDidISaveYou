import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import SignOutButton from '../SignOut';

const Navigation = ({ session }) => (
  <div>
    {session && session.me ? (
      <NavigationAuth session={session} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
);

const NavigationAuth = ({ session }) => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account ({session.me.username})</Link>
    </li>
    {session &&
      session.me &&
      session.me.role === 'ADMIN' && (
        <li>
          <Link to={routes.ADMIN}>Admin</Link>
        </li>
      )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <nav>
  <ul>

  <li>
      <Link to={routes.TIPPER_FOR_COMPUTER_LABS}>TIPPER</Link>
    </li>

    <li>
      <Link to={routes.SIGN_IN}>SIGN IN</Link>
    </li>
    <li>
      <Link to={routes.LANDING}>LANDING</Link>
    </li>

  </ul>
  </nav>
);

export default Navigation;
