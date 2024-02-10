import Logo from './Logo';

type Props = {};

const Footer = (props: Props) => {
  const stats = [
    {
      title: '8+',
      description: 'Years of Experience',
    },
    {
      title: '70+',
      description: 'Websites',
    },
    {
      title: '10+',
      description: 'Webapps',
    },
  ];

  return (
    <footer className='px-4'>
      <div className='dark bg-black rounded-2xl text-white min-h-[80dvh] flex items-center py-[10.25rem]'>
        <div className='container grid gap-[15rem]'>
          <div className='grid gap-16'>
            <h2 className='text-heading-1'>Follow my code.</h2>

            <div className='grid gap-20'>
              <div className='grid gap-4'>
                <a
                  href='https://github.com/BrentWMiller/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-heading-2 hover:underline underline-offset-[0.5rem]'
                >
                  Github
                </a>
                <a
                  href='https://codepen.io/BrentWMiller/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-heading-2 hover:underline underline-offset-[0.5rem]'
                >
                  Codepen
                </a>
              </div>

              <a href='mailto:brentwmiller93@gmail.com' className='text-heading-2 text-gray-light hover:underline underline-offset-[0.5rem]'>
                Contact me
              </a>
            </div>
          </div>

          <div className='grid gap-10'>
            <div className='flex gap-8 justify-between'>
              <Logo className='dark:text-white' />
              <p className='text-code uppercase'>// Built using Figma, Typescript, React, Astro</p>
            </div>
            <p className='text-code'>bye()</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
