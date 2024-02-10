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
    <section className='px-4'>
      <div className='bg-yellow rounded-2xl text-yellow-dark min-h-[80dvh] flex items-center py-[10.25rem]'>
        <div className='container grid gap-10'>
          <p className='text-code text-yellow-dark'>{'let stats = {'}</p>

          <div className='grid gap-16'>
            <h2 className='text-heading-1 max-w-[43.75rem] text-balance'>With the experience to back it up.</h2>

            <dl className='flex justify-between gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='grid gap-6'>
                  <dt className='font-code text-[11.25rem]/[100%]'>{stat.title}</dt>
                  <dd className='font-code text-[1.5rem] tracking-[0.075rem] uppercase'>{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className='text-code text-yellow-dark'>{'}'}</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
