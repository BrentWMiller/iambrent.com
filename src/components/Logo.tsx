import React from 'react';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <a href='/' className={`${className} text-code uppercase`}>
      Brent<span className='text-yellow'>_</span>
    </a>
  );
};

export default Logo;
