import GoogleButton from 'react-google-button';
import useMASContext from '../hooks/useMASContext';
import { Fragment } from 'react';

type Props = {}

const GoogleLogin = (props: Props) => {
  const { user, googleSignIn, signOut } = useMASContext();

  if (user) return (
    <Fragment>
      <div>Logado como { user.displayName }</div>
      <button onClick={ signOut }>Desconectar</button>
    </Fragment>
  );

  return (
    <GoogleButton
      type='light'
      label='Conectar com Google'
      onClick={ googleSignIn }
    />
  )
}

export default GoogleLogin