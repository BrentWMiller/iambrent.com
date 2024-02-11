type Props = {};

const Tech = (props: Props) => {
  const tech = {
    current: ['React', 'Typescript', 'Tailwind', 'NextJS', 'MongoDB', 'Figma'],
    also: ['WordPress', 'Firebase', 'Astro', 'Vue', 'NuxtJS'],
  };

  return (
    <section className='wrapper'>
      <div className='dark bg-black rounded-2xl text-white min-h-[80dvh] flex items-center py-[3rem] md:py-[5rem] lg:py-[10.25rem] px-4 lg:px-10'>
        <div className='container grid gap-10'>
          <p className='text-code'>{'let tech = {'}</p>

          <div className='flex flex-col xl:flex-row gap-20 xl:gap-[12.5rem] xl:justify-between'>
            <h2 className='text-heading-1 max-w-[28.625rem]'>Using an ever-growing and dynamic stack of technology.</h2>

            <div className='grid md:grid-cols-2 gap-10 w-full'>
              <dl className='flex flex-col gap-6'>
                <dt className='text-heading-3 text-gray'>I’m currently building using</dt>
                <dd>
                  <ul className='text-heading-2 grid gap-6'>
                    {tech.current.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </dl>

              <dl className='flex flex-col gap-6'>
                <dt className='text-heading-3 text-gray'>I also enjoy working with</dt>
                <dd>
                  <ul className='text-heading-2 grid gap-6'>
                    {tech.also.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </div>
          </div>

          <p className='text-code'>{'}'}</p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
