import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, NavLink } from "react-router-dom";
import './Layout.css'
import { classNames } from '../utils';
import Footer from './Footer';
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const navigation = [
  { name: 'Trading Tools', href: '' },
  { name: 'Learn', href: 'learn' },
  { name: 'Indicators', href: 'indicators' },
]

const externalLinks = [
  { name: 'Aevo', href: 'https://app.aevo.xyz/r/davyjones', color: ' text-theme-text-pan-navy bg-theme-oldlace  hover:text-theme-pan-sky  rounded-lg' },
  { name: 'dYdX', href: 'https://dydx.trade', color: ' text-theme-text-pan-navy bg-theme-oldlace  hover:text-theme-pan-sky  rounded-lg  ' },
  
]

// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

export default function Layout() {
  return (
    <>
      <div className="min-h-full bg-[url('./assets/Frame.png')] bg-contain bg-repeat bg-top">
        <Disclosure as="nav" className="bg-theme-champagne shadow-sm shadow-theme-navy">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <a href='https://twitter.com/davyjonesxbt' target='_blank' className="flex flex-shrink-0 items-center">
                      <img
                        className="block rounded-lg border h-8 border-theme-pan-navy w-auto lg:hidden"
                        src="/davyjones.png"
                        alt="davyjonesxbt"
                      />
                      <img
                        className="hidden rounded-lg border border-theme-pan-navy h-8 w-auto lg:block"
                        src="/davyjones.png"
                        alt="davyjonesxbt"
                      />
                    </a>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-6">
                      {navigation.map((item) => (

                        <NavLink key={item.name} to={item.href} className={classNames(

                          'border-transparent text-theme-pan-navy hover:text-theme-pan-sky hover:border-theme-pan-sky ',
                          'inline-flex items-center border-b px-1 pt-1 text-md '
                        )}
                        >                          {item.name}</NavLink>


                      ))}



                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:pr-8 sm:flex sm:space-x-4 border-l border-r px-4 border-theme-pan-navy ">

                      <span className='inline-flex items-center  text-md  my-3 pl-4'>Trade:</span>


                      {externalLinks.map((item) => (
                        <a
                          target='_blank'
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.color,
                            'inline-flex items-center shadow-sm shadow-theme-pan-navy   text-md  my-3 px-4'
                          )}

                        >
                          {item.name}
                        </a>
                      ))}

                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-theme-pan-navy hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}

                    {/* Profile dropdown */}
                    {/* <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (

                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-md text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>


                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu> */}
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex border border-transparent items-center justify-center rounded-md  p-2 text-theme-pan-navy hover:border hover:border-theme-pan-navy  focus:outline-none focus:ring-2 focus:ring-theme-pan-sky focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (

                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(

                        'border-transparent text-theme-pan-navy hover:border-theme-pan-navy  ',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}

                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}

                  {externalLinks.map((item) => (

                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(

                        'border-transparent text-theme-pan-navy hover:border-theme-pan-navy  ',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}

                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                {/* <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-md font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-theme-pan-navy hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10 ">
          <main>
            <div className=' mx-auto max-w-7xl sm:px-6 lg:px-8 leading-tight  tracking-normal font-morion bg-theme-champagne bg-opacity-50'>
              <h1 className=" text-xl font-semibold  text-theme-pan-navy pl-4 hover:text-theme-pan-sky ">  <a href='https://twitter.com/davyjonesxbt' target='_blank'>DavyJonesXBT</a>
              </h1>
              <p className=' text-md  leading-tight font-wigrum pl-4'>Trading Tools & Resources</p>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 "><Outlet></Outlet></div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
