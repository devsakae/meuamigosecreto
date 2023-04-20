import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function perfil() {
  const [user, setUser] = useState();
  const { loggedUser } = useAuth();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = loggedUser || JSON.parse(localStorage.getItem('mas_user_info'));
      setUser(localUser);
    }
  }, [])

  return (
    <div>
      <h2>Perfil</h2>
      { user ? `Bem vindo(a), ${ user?.displayName }` : 'Bem vindo(a), visitante.' }
    </div>
  )
}
