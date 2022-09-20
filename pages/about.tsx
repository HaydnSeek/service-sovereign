/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/

import Image from "next/image"
import Link from "next/link"
import lightcastColor from '../public/lightcast-color.svg'
import anthony from '../public/images/anthony.svg'

export default function About() {
  return (
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          {/* <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2> */}
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            About Service Sovereign
          </p>
        </div>
        <div className="relative mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-gray-500">
          Service Sovereign provides our clients peace of mind.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
              <p>
              With a strong attention to detail, we pride ourselves on consistently delivering the highest quality property services. Some of the reasons our clients choose us because:
              </p>
              <ul role="list">
                <li>Woman owned business</li>
                <li>Fully insured</li>
                <li>Our principals are actively involved in the business</li>
                <li>We are highly responsive to clients&apos; requests</li>
                <li>We always strive to improve and offer more to our clients</li>
              </ul>
              <p>
              Whether you need commercial, residential, move out, seasonal or post-construction cleaning services you will experience our high quality process, which ensures the result you seek.
              </p>
              <h3>We&apos;re here to help</h3>
              <p>
              We work according to our clients&apos; schedules:
              </p>
              <ul role="list">
                <li>Daily/Nightly</li>
                <li>Weekly</li>
                <li>Monthly</li>
                <li>Quarterly</li>
                <li>Custom</li>
              </ul>
              <p>We have local staff&mdash;we are your neighbors!</p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
              <div className="rounded-md shadow">
                <Link
                  href="/get-a-quote"
                >
                  <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#08a037] px-5 py-3 text-base font-medium text-white hover:bg-[#08a037] cursor-pointer">
                    Get a Quote
                  </div>
                </Link>
              </div>
              <div className="ml-4 rounded-md shadow">
                <Link
                  href="/contact"
                >
                  <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#08a037] hover:bg-gray-50 cursor-pointer">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            {/* <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg> */}
            <blockquote className="relative rounded-lg bg-white shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <Image
                  src={lightcastColor}
                  alt="Lightcast"
                />
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    I&apos;ve never worked with a more competent group of contractors. They are always on time, and they always do a great job. I highly recommend them.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-[#08a037] py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                <span className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                  <div className="h-12 w-12 rounded-full bg-[#08a037] sm:h-20 sm:w-20">
                    <Image
                      src={anthony}
                      alt=""
                    />
                  </div>
                </span>
                <span className="relative ml-4 font-semibold leading-6 text-white sm:ml-24 sm:pl-1">
                  <span className="font-bold text-white sm:inline">Anthony Crockett,</span>{' '}
                  <span className="sm:inline">Facilities Manager at Lightcast</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
