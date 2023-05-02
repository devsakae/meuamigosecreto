import { useEffect, useState } from 'react';
import Layout from '../components/UI/Layout';
import useAuth from '../hooks/useAuth';

export default function perfil() {
  const [user, setUser] = useState();
  const { loggedUser } = useAuth();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = localStorage.getItem('mas_user_info') || '';
      const getUser = loggedUser || JSON.parse(localUser);
      setUser(getUser);
    }
  }, [])

  return (
    <Layout>
      <h2>Perfil</h2>
    </Layout>
  )
}
