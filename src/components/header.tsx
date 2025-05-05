import { Link } from '@tanstack/react-router';
import { buttonVariants } from './ui/button';

export default function Header() {
  return (
    <header className="bg-white rounded-xl flex items-center justify-between py-6 px-4">
      <Link
        className="text-2xl font-bold"
        to="/"
      >
        Aral Pinoy
      </Link>
      <nav className=" flex flex-row gap-x-6">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Blog</Link>
      </nav>
      <div>
        <Link
          className={buttonVariants({ variant: 'default' })}
          to="/"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
