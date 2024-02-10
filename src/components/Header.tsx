import Logo from './Logo';
import Navigation from './Navigation';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='container flex gap-8 justify-between items-center pt-6'>
      <Logo className='text-black' />

      <Navigation />
    </header>
  );
};

export default Header;
