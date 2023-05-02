import { GoogleLoginButton } from 'react-social-login-buttons';
import useAuth from '../hooks/useAuth';

type Props = {}

const GoogleLogin = (props: Props) => {
  const { user, googleSignIn, signOut } = useAuth();

  if (user) return (
    <>
      <div>Logado como { user.displayName }</div>
      <button onClick={ signOut }>Desconectar</button>
    </>
  );

  return (<GoogleLoginButton onClick={ googleSignIn } />)
}

export default GoogleLogin