import { useEffect, useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import DropdownMenu, { IMenuOption } from './Atoms/DropdownMenu';
import { FiLogOut, FiEdit2 } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}

export default function DashNavbar() {
  const { logout } = useAuth();
  const { showError } = useToast();
  const navigate = useNavigate();

  const navigationLinks = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Trainer', href: '/trainer', current: false },
    { name: 'Classes', href: '/classes', current: false },
    { name: 'Schedule', href: '/schedule', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const [navigation, setNavigation] = useState(navigationLinks);

  useEffect(() => {
    const newNavigation = navigationLinks.map((e) => ({
      ...e,
      current: e.href === window.location.pathname,
    }));
    setNavigation(newNavigation);
  }, [window.location.pathname]);

  const menuOptions = [
    {
      icon: <FiEdit2 />,
      label: 'Edit Profile',
      onClick: () => navigate('/update-profile'),
    },
    {
      icon: <FiLogOut />,
      label: 'Log Out',
      onClick: handleLogout,
    },
  ];

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      showError(err);
    }
  }

  const ProfilePicture = (
    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        alt=""
      />
    </Menu.Button>
  );

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          {/* Navbar content */}
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo and Navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/images/logo.png"
                      alt="Yoga Fit by Apurva"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="/images/logo.png"
                      alt="Yoga Fit by Apurva"
                    />
                  </Link>
                </div>
                {/* Navigation Links */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Side Icons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification Icon */}
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile Dropdown */}
                <DropdownMenu
                  dropDownButtonComponent={ProfilePicture}
                  options={menuOptions}
                />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
