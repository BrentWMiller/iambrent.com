type Props = {};

const Stats = (props: Props) => {
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
    <section className='wrapper'>
      <div className='bg-theme rounded-2xl text-theme-dark min-h-[80dvh] flex items-center py-[3rem] md:py-[5rem] lg:py-[10.25rem] px-4 lg:px-10'>
        <div className='container grid gap-10'>
          <p className='text-code text-theme-dark'>{'let stats = {'}</p>

          <div className='grid gap-16'>
            <h2 className='text-heading-1 max-w-[43.75rem] text-balance'>With the experience to back it up.</h2>

            <dl className='flex flex-col md:flex-row justify-between gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='grid gap-4 lg:gap-6'>
                  <dt className='font-code text-[6rem]/[100%] xl:text-[11.25rem]/[100%]'>{stat.title}</dt>
                  <dd className='font-code text-[1rem] xl:text-[1.5rem] tracking-[0.05rem] xl:tracking-[0.075rem] uppercase'>{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className='text-code text-theme-dark'>{'}'}</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
