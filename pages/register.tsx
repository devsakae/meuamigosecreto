import useAuth from '../hooks/useAuth';

export default function register() {
  const { githubSignIn, githubSignOut, googleSignIn } = useAuth();

  return (
    <>
      <button onClick={ githubSignIn }>
        Logar com Github
      </button>
      <button onClick={ githubSignOut }>
        Deslogar Github
      </button>
      <button onClick={ googleSignIn }>
        Logar com Google
      </button>
      {/* <button onClick={ googleSignOut }>
        Deslogar Google
      </button> */}
    </>
  )
}
