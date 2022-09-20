/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const navigation = {
  about: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  services: [
    { name: 'Commercial Cleaning', href: '/commercial-cleaning' },
    { name: 'Construction Cleaning', href: '/construction-cleaning' },
    { name: 'Churches / Religious Facilities', href: '/churches' },
    { name: 'Vacation / Seasonal Cleaning', href: '/vacation-rentals' },
    { name: 'Move outs', href: '/move-outs' },
    { name: 'School and Institutional', href: '/schools' },
    { name: 'Janitorial', href: '/janitorial' },
  ],
  contact: [
    { name: 'Build a quote', href: '/get-a-quote' },
  ],
  work: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <div>
                <h3 className="text-base font-medium text-gray-900">About</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div>
                <h3 className="text-base font-medium text-gray-900">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <div className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">
                          {item.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Work</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.work.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-base font-medium text-gray-900">Location</h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  State
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-[#08a037] focus:outline-none focus:ring-[#08a037] sm:text-sm"
                    defaultValue="English"
                  >
                    <option>Idaho</option>
                    <option>Washington</option>
                    <option>Oregon</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-base font-medium text-gray-900">Subscribe to our newsletter</h3>
            <p className="mt-2 text-base text-gray-500">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-[#08a037] focus:placeholder-gray-400 focus:outline-none focus:ring-[#08a037] sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#08a037] py-2 px-4 text-base font-medium text-white hover:bg-[#08a037] focus:outline-none focus:ring-2 focus:ring-[#08a037] focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; 2022, Service Sovereign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
