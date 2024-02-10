import React from 'react';

type Props = {
  className?: string;
};

const ArrowRight = ({ className }: Props) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5 12H19M19 12L12 5M19 12L12 19' stroke='#3F0800' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};

export default ArrowRight;