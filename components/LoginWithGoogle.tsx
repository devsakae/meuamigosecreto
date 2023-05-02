import { GoogleLoginButton } from 'react-social-login-buttons';
import useAuth from '../hooks/useAuth';

type Props = {}

const GoogleLogin = (props: Props) => {
  const { googleSignIn, loggedUser, githubSignOut } = useAuth();

  if (loggedUser) return (
    <>
      <div>Logado como { loggedUser.displayName }</div>
      <button onClick={ githubSignOut }>Desconectar</button>
    </>
  );

  return (<GoogleLoginButton onClick={ googleSignIn } />)
}

export default GoogleLogin