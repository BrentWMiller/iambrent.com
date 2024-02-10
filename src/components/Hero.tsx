import { useState } from 'react';

export default function Hero({}: {}) {
  return (
    <section className='container h-[80vh] flex items-end'>
      <h1 className='text-[8rem]/[100%] font-bold text-balance'>
        Eye for design.
        <br />
        Love for function<span className='text-gray'>ality.</span>
      </h1>
    </section>
  );
}
