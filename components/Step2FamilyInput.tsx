import React from 'react';

type Props = {};

const Step2FamilyInput = (props: Props) => {
  return (
    <form className='flex flex-col text-sm text-center'>
      <input name='familyidinput' type='text' placeholder='Insira o ID da sua família' className='w-60 h-8 border-[0.5px] border-sky-700 rounded' />
    </form>
  );
};

export default Step2FamilyInput;
