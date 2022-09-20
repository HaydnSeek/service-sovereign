/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import Image from 'next/image'
import {
  BriefcaseIcon,
  HomeModernIcon,
  TruckIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'
import Maddox from '../public/Maddox.svg'
import ColorMaddox from '../public/Color.svg'
import Lightcast from '../public/Lightcast.svg'
import SEL from '../public/SEL.svg'
import Laura from '../public/images/laura.svg'

const actions = [
  {
    title: 'Commercial Cleaning',
    href: '/commercial-cleaning',
    icon: BriefcaseIcon,
    iconForeground: 'text-white',
    iconBackground: 'bg-[#08a037]',
    description: 'Keep your business looking its best while maintaining a safe and clean workplace.',
  },
  {
    title: 'Construction Cleaning',
    href: '/construction-cleaning',
    icon: WrenchIcon,
    iconForeground: 'text-white',
    iconBackground: 'bg-[#08a037]',
    description: 'Cleaning for construction companies, project managers, and homeowners.',
  },
  {
    title: 'Vacation Rentals',
    href: '/vacation-rentals',
    icon: HomeModernIcon,
    iconForeground: 'text-white',
    iconBackground: 'bg-[#08a037]',
    description: 'Before your guests arrive at your rental property, ensure they are walking into a clean, inviting home every time.',
  },
  {
    title: 'Move Outs',
    href: '/move-outs',
    icon: TruckIcon,
    iconForeground: 'text-white',
    iconBackground: 'bg-[#08a037]',
    description: 'Whether you are a homeowner or a tenant, it is important to leave behind a clean space for the new residents.',
  }
]

export default function Home() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
        <main className="mt-16 px-4 sm:mt-24">
          <div className="text-center max-w-7xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Expert commercial and residential</span>{' '}
              <span className="block text-[#08a037] xl:inline">cleaning.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Service Sovereign sets the standard for property service by our commitment to our clients.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/get-a-quote"
                >
                  <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#08a037] px-8 py-3 text-base font-medium text-white hover:bg-[#08a037] md:py-4 md:px-10 md:text-lg cursor-pointer">
                    Get a Quote
                  </div>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="/reviews"
                >
                  <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#08a037] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg cursor-pointer">
                    Read reviews
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#08a037]">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Trusted by these great companies
              </h2>
              <div className="mt-8 flow-root lg:mt-10">
                <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                  <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                    <Image className="h-12" src={Maddox} alt="Maddox" />
                  </div>
                  <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                    <Image className="h-12" src={Lightcast} alt="Lightcast" />
                  </div>
                  <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                    <Image
                      className="h-12"
                      src={SEL}
                      alt="SEL"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divide-y mt-16 max-w-7xl mx-auto divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <Link href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <div className='cursor-pointer'>
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
                </div>
              </Link>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {action.description}
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
    <section className="overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <svg
          className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Maddox</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg> */}

        <div className="relative">
          {/* <div className='text-center'>
            <Image
              className="mx-auto h-8"
              src={ColorMaddox}
              alt="Maddox"
            />
          </div> */}
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <p>
                &ldquo;Service Sovereign consistently provides us with the snappiest, most responsive customer experience in town. Cannot recommend more highly for every business!&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className="mx-auto h-10 w-10 rounded-full">
                    <Image
                      src={Laura}
                      alt="Laura Boyd"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Laura Boyd</div>

                  <svg className="mx-1 hidden h-5 w-5 text-[#08a037] md:block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">Office Manager, Maddox Industrial Transformer</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
        </main>
  )
}
