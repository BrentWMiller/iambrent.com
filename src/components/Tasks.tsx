type Props = {};

const Tasks = (props: Props) => {
  const tasks = [
    {
      category: 'Software',
      title: 'Custom software to run an interactive game show.',
      tags: ['Nextjs', 'MongoDB', 'Socket.io', 'Tailwind', 'Typescript', 'Cypress', 'Express'],
    },
    {
      category: 'E-commerce',
      title: 'Bespoke e-commerce solution for a hardware store.',
      tags: ['NuxtJS', 'Firebase', 'Tailwind', 'ElasticSearch', 'Meilisearch', 'Twilio', 'Mailgun', 'FreightView', 'Payeezy', 'Active Directory'],
    },
    {
      category: 'Webapps',
      title: 'Intuitive dashboard and learning system for a massive tire brand.',
      tags: ['NextJS', 'MongoDB', 'Firebase', 'Tailwind', 'Figma'],
    },
    {
      category: 'Integrations & Tools',
      title: 'Custom integration tool for connecting time-tracking with a payroll system.',
      tags: ['NuxtJS', 'Firebase', 'Quickbooks', 'Toggl', 'Tailwind'],
    },
    {
      category: 'Custom Systems',
      title: 'Multi-tenant, white-label order management system.',
      tags: ['Angular', 'Firebase', 'Material UI', 'Mailgun', 'Typescript'],
    },
    {
      category: 'Custom Systems',
      title: "Redesigned frontend for nationwide hospital's equipment service system.",
      tags: ['Angular', 'Bootstrap', '.NET', 'Typescript', 'Material UI'],
    },
    {
      category: 'Theming',
      title: 'Powerful section-based starter theme template for Drupal and Wordpress.',
      tags: ['PHP', 'Twig', 'Javascript', 'AplineJS', 'Tailwind', 'Wordpress', 'Drupal'],
    },
    {
      category: 'Websites',
      title: 'Dozens of fully custom themes for Drupal and Wordpress.',
      tags: ['PHP', 'Twig', 'AlpineJS', 'Tailwind', 'Drupal', 'WordPress'],
    },
    {
      category: 'Education',
      title: 'Transformed an entire university’s course catalog into dynamic web pages programmatically.',
      tags: ['PHP', 'Twig', 'AlpineJS', 'Tailwind', 'Drupal'],
    },
    {
      category: 'Plugins',
      title: 'Custom plugins to enhance Drupal and Wordpress.',
      tags: ['PHP', 'Javascript', 'Drupal', 'Wordpress'],
    },
  ];

  return (
    <section className='px-4'>
      <div className='dark bg-black rounded-2xl text-white min-h-[80dvh] flex items-center py-[10.25rem]'>
        <div className='container grid gap-10'>
          <p className='text-code'>{'let tasks = {'}</p>

          <div className='grid gap-16'>
            <h2 className='text-heading-1 max-w-[59.375rem] text-balance'>A few favorites I've helped develop and launch.</h2>

            <div className='grid grid-cols-3 gap-x-8 gap-y-16'>
              {tasks.map((task, index) => (
                <div key={index} className='grid gap-5'>
                  <h3 className='text-code-sm uppercase'>{task.category}</h3>
                  <h4 className='text-heading-2'>{task.title}</h4>
                  <p className='text-code-sm uppercase'>{task.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          <p className='text-code'>{'}'}</p>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
