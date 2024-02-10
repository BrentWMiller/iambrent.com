import { useState } from 'react';
import ArrowRight from './icons/ArrowRight';

export default function Hero({}: {}) {
  return (
    <section className='container min-h-[80dvh] grid items-end'>
      <div className='grid gap-16 my-[7.5rem]'>
        <div className='grid gap-10'>
          <h1 className='row-start-2 text-display'>
            Eye for design.
            <br />
            Love for function<span className='text-gray'>ality.</span>
          </h1>

          <div>
            <p className='text-code'>hello()</p>
            <p className='text-code'>
              let theme = THEMES.
              <button type='button' className='text-yellow-dark bg-yellow rounded-sm underline'>
                yellow
              </button>
            </p>
          </div>
        </div>

        <div>
          <a
            href='#solutions'
            className='inline-flex items-center justify-between w-full gap-8 max-w-[25.25rem] p-5 pl-[2.75rem] border border-gray-light rounded-full text-[1.5rem] font-medium'
          >
            View Solutions
            <span className='inline-flex size-20 items-center justify-center bg-yellow rounded-full'>
              <ArrowRight className='text-yellow-dark size-6' />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
