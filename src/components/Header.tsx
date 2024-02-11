import Logo from './Logo';
import Navigation from './Navigation';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='container flex md:flex-row flex-col gap-8 justify-between md:items-center pt-4 md:pt-6'>
      <Logo className='text-black' />
      <Navigation />
    </header>
  );
};

export default Header;
