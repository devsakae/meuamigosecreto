import { GithubLoginButton } from 'react-social-login-buttons';
import useAuth from '../hooks/useAuth';

type Props = {}

const LoginWithGithub = (props: Props) => {
  const { githubSignIn } = useAuth();
  return (
    <GithubLoginButton
      onClick={ githubSignIn }
    />
  )
}

export default LoginWithGithub;