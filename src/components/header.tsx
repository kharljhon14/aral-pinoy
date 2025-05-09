import { Link } from '@tanstack/react-router';
import { buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white rounded-xl flex items-center justify-between py-6 px-8">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <Link
            className="text-2xl font-bold"
            to="/"
          >
            Aral Pinoy
          </Link>
          <nav className="hidden flex-row gap-x-6">
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Blog</Link>
          </nav>
          <div className="hidden">
            <Link
              className={buttonVariants({ variant: 'default' })}
              to="/"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg-hidden flex items-center">
            <button
              className="cursor-pointer"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        <div
          className={`${
            showMobileMenu ? 'py-6 h-80 border-t mt-8' : 'py-0 h-0'
          }  overflow-hidden transition-all duration-300`}
        >
          <nav className="flex flex-col text-lg items-center justify-center gap-y-4">
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Blog</Link>
          </nav>
          <div className="mt-8 flex justify-center">
            <Link
              className={buttonVariants({ variant: 'default', className: 'mx-auto' })}
              to="/"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
