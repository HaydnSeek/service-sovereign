/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import cleaningService from '../public/images/professional-cleaning-service.jpeg';
import serviceSovereignProfile from '../public/service-sovereign-profile.svg';
import disinfect from '../public/images/disinfect.jpeg';
import covid from '../public/images/covid.jpeg';
const posts = [
  {
    title: '5 Reasons Why You Should Hire a Professional Cleaning Service for Your Office',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'There are multiple reasons to keep your office clean. Office staff need and deserve to work in a clean environment, and an office\'s cleanliness or filthiness reflects a lot about a business. ',
    date: 'September 19, 2022',
    datetime: '2022-09-19',
    image:
      cleaningService,
    readingTime: '6 min',
    author: {
      name: 'Service Sovereign',
      href: '#',
      image:
        serviceSovereignProfile,
    },
  },
  {
    title: 'How to Disinfect Your House',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'The need for effective cleaning of our homes, workplaces and public areas is more important than ever before. How can we meet this challenge? Here are some steps we are taking at Service Sovereign.',
    date: 'September 19, 2022',
    datetime: '2022-09-19',
    image:
      disinfect,
    readingTime: '6 min',
    author: {
      name: 'Service Sovereign',
      href: '#',
      image:
        serviceSovereignProfile,
    },
  },
  {
    title: 'Covid-19 Cleaning Protocols',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'We are in unprecedented times. With the ongoing spread of COVID-19 (coronavirus) and the incredible speed at which things are changing around us, we are committed to taking steps to inform you of the protocols taken to help reduce the spread of this virus.',
    date: 'September 19, 2022',
    datetime: '2022-09-19',
    image:
      covid,
    readingTime: '6 min',
    author: {
      name: 'Service Sovereign',
      href: '#',
      image:
        serviceSovereignProfile,
    },
  },
]

export default function Blog() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="h-full w-full object-cover">
                  <Image src={post.image} alt="" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#08A037]">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <div className="h-10 w-10 rounded-full">
                        <Image src={post.author.image} alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
