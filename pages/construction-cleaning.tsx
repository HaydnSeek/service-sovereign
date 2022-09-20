import Image from 'next/future/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import constructionCleaning from "../public/images/construction-cleaning.jpeg"

const features = [
  {
    name: 'Offices',
    description: 'We clean offices, from small to large, and everything in between.',
  },
  {
    name: 'Stores',
    description: 'From big box stores to small boutiques, we can clean them all.',
  },
  {
    name: 'Salons/Spas',
    description: 'We can clean your salon or spa, and make it look like new.',
  },
  {
    name: 'Gyms/Fitness Centers',
    description: 'Get your gym or fitness center in tip-top shape.',
  },
  {
    name: 'Condo Complex/Apartment Buildings',
    description: 'Apartment buildings and condo complexes are our specialty.',
  },
  {
    name: 'Clubhouses',
    description: 'Bring your clubhouse back to life with a deep clean.',
  },
  {
    name: 'Churches',
    description: 'Cleanliness is next to godliness, and we can help you with that.',
  },
  {
    name: 'Libraries',
    description: 'Old books don\'nt have to be covered in dust.',
  },
  {
    name: 'Banks',
    description: 'Customers will feel more comfortable in a clean bank.',
  },
  {
    name: 'Medical and Dental Offices',
    description: 'Give your patients a clean and healthy environment.',
  },
]

export default function ConstructionCleaning() {
  return (
    <>
    {/* <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Construction Cleaning</h2>
          <p className="mt-4 text-lg text-gray-500">
          Our work includes brand new homes, fine interior remodeling projects, commercial and institutional buildings. We deliver superb service to a clientele that will accept nothing less.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div> */}
    <div className="relative bg-gray-800">
      <div className="h-56 relative bg-[#08a037] sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src={constructionCleaning}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          {/* <h2 className="text-lg font-semibold text-gray-300">Award winning support</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Do you have a specific property project in mind?</p>
          <p className="mt-3 text-lg text-gray-300">
          Contact us to start a conversation on how to best meet your requirements.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/get-a-quote"
              >
                <div className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 cursor-pointer">
                Get a quote
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
