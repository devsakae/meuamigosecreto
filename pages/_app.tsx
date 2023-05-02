import { AuthProvider } from '../context/AuthContext';
import { MASProvider } from '../context/MASContext';
import '../style.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <MASProvider>
        <Component { ...pageProps } />
      </MASProvider>
    </AuthProvider>
  )
}

export default MyApp;