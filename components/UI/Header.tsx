import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full flex items-center justify-between p-4 bg-blue-400'>
      <div>
        <Link href={'/'}>
          <Image src={ logo } alt="Meu amigo secreto" height="100" />
        </Link>
      </div>
      <nav>
        Menu buttons
      </nav>
    </header>
  )
}

export default Header