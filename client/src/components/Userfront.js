import Userfront from '@userfront/react';

Userfront.init('6nz4ydmn');

const SignupForm = Userfront.build({
  toolId: 'dbkarl',
});

const LoginForm = Userfront.build({
  toolId: 'nmkdab',
});

const PasswordResetForm = Userfront.build({
  toolId: 'onrlam',
});

const LogoutButton = Userfront.build({
  toolId: 'anlbao',
});

export {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
};
