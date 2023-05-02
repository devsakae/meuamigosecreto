import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='w-full flex flex-row gap-x-4 items-center justify-center bg-blue-950 text-white text-sm py-2'>
      <Link href={ '/privacy' } className='hover:text-teal-200' >
        Política de privacidade
      </Link>
      <div>
        meuamigosecreto.com.br 2023
      </div>
    </footer>
  )
}
