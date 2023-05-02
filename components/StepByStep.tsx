import React from 'react';
import GoogleLogin from './LoginWithGoogle';
import useAuth from '../hooks/useAuth';
import Step2FamilyInput from './Step2FamilyInput';

type Props = {};

export default function StepByStep({ }: Props) {
  const { user } = useAuth();
  return (
    <section className='flex flex-col lg:flex-row justify-around w-full p-4 items-center'>
      <div className='flex flex-col items-center'>
        <div className='min-h-[70px]'>
          <h2>Início rápido</h2>
          <p>Tão fácil quanto contar até 3:</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div
          className={`flex flex-row justify-center w-60 text-xs uppercase font-semibold p-1 px-2 rounded ${user ? 'text-lime-300 bg-cyan-800' : 'text-rose-200 bg-sky-700'} `}
        >
          {user ? '✅ Conectado' : 'PASSO 1'}
        </div>
        <div className='min-h-[70px] flex items-center justify-center'>
          <GoogleLogin />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div
          className={`flex flex-row justify-center w-60 text-xs uppercase font-semibold p-1 px-2 rounded ${user ? 'text-lime-300 bg-cyan-800' : 'text-rose-200 bg-sky-700'} `}
        >
          {user ? '✅ Conectado' : 'PASSO 2'}
        </div>
        <div className='min-h-[70px] flex items-center justify-center'>
          <Step2FamilyInput />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div
          className={`flex flex-row justify-center w-60 text-xs uppercase font-semibold p-1 px-2 rounded ${user ? 'text-lime-300 bg-cyan-800' : 'text-rose-200 bg-sky-700'} `}
        >
          {user ? '✅ Conectado' : 'PASSO 3'}
        </div>
        <div className='min-h-[70px] flex items-center justify-center'>
          Crie sua lista
        </div>
      </div>
    </section>
  );
}
