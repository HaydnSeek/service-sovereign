/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  Bars3Icon,
  BriefcaseIcon,
  HomeModernIcon,
  XMarkIcon,
  ChevronDownIcon, TruckIcon, WrenchIcon
} from '@heroicons/react/24/outline'

import logo from '../public/service-sovereign.svg'

import { useState } from 'react'

const solutions = [
  {
    name: 'Commercial Cleaning',
    description: 'Keep your business looking its best while maintaining a safe and clean workplace.',
    href: '/commercial-cleaning',
    icon: BriefcaseIcon,
  },
  {
    name: 'Construction Cleaning',
    description: ' Cleaning for construction companies, project managers, and homeowners.',
    href: '/construction-cleaning',
    icon: WrenchIcon,
  },
  // { name: 'Churches', description: "Your customers' data will be safe and secure.", href: '/churches', icon: ShieldCheckIcon },
  {
    name: 'Vacation Rentals',
    description: "Before your guests arrive at your rental property, ensure they are walking into a clean, inviting home every time.",
    href: '/vacation-rentals',
    icon: HomeModernIcon,
  },
  {
    name: 'Move Outs',
    description: 'Whether you are a homeowner or a tenant, it is important to leave behind a clean space for the new residents.',
    href: '/move-outs',
    icon: TruckIcon,
  },
  // {
  //   name: 'Schools',
  //   description: 'Get detailed reports that will help you make more informed decisions ',
  //   href: '/schools',
  //   icon: AcademicCapIcon,
  // },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [isDismissed, setIsDismissed] = useState(false)
  return (
    <>
      {/* {!isDismissed && <div className="relative bg-[#08a037]">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:px-16 sm:text-center">
            <p className="font-medium text-white">
              <span className="md:hidden">Welcome to our new site!</span>
              <span className="hidden md:inline">Welcome to our new site! Read about the brand launch and more.</span>
              <span className="block sm:ml-2 sm:inline-block">
                <a href="/service-sovereign-announces-new-site" className="font-bold text-white underline">
                  Learn more
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </span>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
            <button
              type="button"
              className="flex rounded-md p-2 hover:bg-[#08a037] focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsDismissed(true)}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>} */}
      <Popover className="relative bg-white">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <div className="flex cursor-pointer w-auto">
                <span className="sr-only">Service Sovereign</span>
                <Image
                  src={logo}
                  alt="Service Sovereign"
                />
              </div>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#08a037]">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08a037] focus:ring-offset-2'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                              >
                                <div className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#08a037] text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 p-5 sm:p-8">
                            <Link href="#">
                              <div className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100 cursor-pointer">
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-gray-900">Enterprise</div>
                                  <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-[#08a037]">
                                    New
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Empower your entire team with even more advanced tools.
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/about">
                <div className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/blog">
                <div className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                  Blog
                </div>
              </Link>

              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08a037] focus:ring-offset-2'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a key={item.name} href={item.href} className="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link href="/contact-us">
                <div className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                  Contact
                </div>
              </Link>
              <Link
                href="/get-a-quote"
              >
                <div className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-[#08a037] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#08a037] cursor-pointer">
                  Get a Quote
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Image
                      src={logo}
                      alt="Service Sovereign"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#08a037]">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                      >
                        <div className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#08a037] text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/about">
                    <div className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer">
                      About
                    </div>
                  </Link>

                  <Link href="/blog">
                    <div className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer">
                      Blog
                    </div>
                  </Link>

                  {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Enterprise
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
                <div className="mt-6">
                  <a
                    href="/get-a-quote"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#08a037] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#08a037]"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
