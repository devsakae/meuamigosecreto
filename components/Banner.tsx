import Image from 'next/image';
import React from 'react';
import giftExchange from '../assets/img/giftexchange-lane.png';

type Props = {}

function Banner({}: Props) {
  return (
    <section className='flex flex-col lg:flex-row w-full p-4 justify-between banner'>
      <div className='flex flex-col gap-y-4 items-center justify-center text-center w-full'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold max-w-[800px]'>Descubra o que o seu <span className='text-sky-800'>amigo secreto</span> quer ganhar.</h1>
        <p className='text-xl'>A sua lista de amigo secreto online e gratuita!</p>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <Image src={ giftExchange } priority={ true } alt='amigosecreto.com.br' style={{ maxHeight: '400px', maxWidth: '400px' }} />
      </div>
    </section>
  )
}

export default Banner