import React from 'react';
import GoogleLogin from './LoginWithGoogle';
import useAuth from '../hooks/useAuth';

type Props = {};

export default function StepByStep({}: Props) {
  const { loggedUser } = useAuth();
  return (
    <section className='flex flex-row justify-around w-full p-4'>
      <div className='flex flex-col'>
        <div
          className={`flex flex-row justify-center w-full text-xs uppercase font-semibold p-1 px-2 rounded ${loggedUser ? 'text-lime-300 bg-cyan-800' : 'text-rose-200 bg-sky-700' } `}
          >
          { loggedUser ? '✅ Conectado' : 'PASSO 1' }
        </div>
        <div>
          <GoogleLogin />
        </div>
      </div>
      <div>Passo 1</div>
      <div>Passo 1</div>
    </section>
  );
}
