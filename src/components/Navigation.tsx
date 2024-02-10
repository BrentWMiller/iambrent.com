type Props = {};

const Navigation = (props: Props) => {
  const links = [
    {
      href: '/projects',
      text: 'Projects',
      count: 3,
    },
    {
      href: '/blog',
      text: 'Blog',
      count: 10,
    },
    {
      href: '/snippets',
      text: 'Snippets',
      count: 5,
    },
    {
      href: '/uses',
      text: 'Uses',
      count: null,
    },
  ];

  return (
    <nav className='flex items-center gap-8 text-code'>
      <p>const menu = [</p>
      <ul className='flex items-center gap-8'>
        {links?.length &&
          links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='text-black'>
                {link.text}
                {link.count && <span className='text-gray'>&nbsp;{link.count}</span>}
                {index !== links.length - 1 && <span className='text-gray'>,</span>}
              </a>
            </li>
          ))}
      </ul>
      <p>]</p>
    </nav>
  );
};

export default Navigation;
