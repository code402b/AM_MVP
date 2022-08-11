import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Userfront from '@userfront/react';

import {
  MediaContainer,
  TextEntry,
  Footer,
} from './components/component_index.jsx';

import {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
} from './components/Userfront.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  if (!Userfront.accessToken()) {
    return (
      <Navigate replace to="/login" />
    );
  }
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button type="button" onClick={Userfront.logout}>Logout</button>
    </div>
  );
}

function NotFound() {
  return <h2>404 Page not found</h2>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
