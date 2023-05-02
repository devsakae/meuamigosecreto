import { AuthProvider } from '../context/AuthContext';
import '../style.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <Component { ...pageProps } />
    </AuthProvider>
  )
}

export default MyApp;