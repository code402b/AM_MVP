import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Userfront from '@userfront/react';

import {
  NoteApp,
  AppHeading,
} from './components/component_index.jsx';

import {
  SignupForm,
  LoginForm,
  PasswordResetForm,
} from './components/Userfront.js';

// Userfront.init('6nz4ydmn');

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={(
              <RequireAuth>
                <Home />
              </RequireAuth>
            )}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<PasswordReset />} />
          {/* <Route
            path="/dashboard"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// ---- Userfront components ----
function Home() {
  return (
    <NoteApp />
    // <div>
    //   <AppHeading />
    //   <LogoutButton />
    // </div>
  );
}

function Login() {
  const location = useLocation();
  if (Userfront.tokens.accessToken) {
    return (
      <Navigate to="/" state={{ from: location }} replace />
    );
  }
  return (
    <div id="login">
      <AppHeading />
      <LoginForm />
      <div className="authFooter">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div id="signup">
      <AppHeading />
      <SignupForm />
      <div className="authFooter">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function PasswordReset() {
  return (
    <div id="reset">
      <AppHeading />
      <PasswordResetForm />
    </div>
  );
}

function NotFound() {
  return (
    <div id="404">
      <AppHeading />
      <h2>404 Page not found</h2>
    </div>
  );
}

function RequireAuth({ children }) {
  const location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  return children;
}

// function Dashboard() {
//   const userData = JSON.stringify(Userfront.user, null, 2);
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <pre>{userData}</pre>
//       <LogoutButton />
//       {/* <button type="button" onClick={Userfront.logout}>Logout</button> */}
//     </div>
//   );
// }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
