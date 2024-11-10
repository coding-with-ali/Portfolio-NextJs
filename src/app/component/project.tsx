import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Governor Website Clone',
    description: 'I specialize in creating high-quality websites and web applications using HTML, CSS, and JavaScript. I offer custom design and development services.',
    image: '/projet-1.JPG',
  },
  {
    title: 'Project 2',
    description: 'I am skilled in creating user-friendly and intuitive designs for web applications and websites. I offer personalized design and development services.',
    image: '/p2.png',
  },
  {
    title: 'Project 3',
    description: 'I specialize in creating engaging and effective digital marketing campaigns for businesses. I offer personalized marketing and development services.',
    image: '/p3.png',
  },
  {
    title: 'Project 4',
    description: 'I specialize in creating high-quality websites and web applications using HTML, CSS, and JavaScript. I offer custom design and development services.',
    image: '/p4.png',
  },
  {
    title: 'Project 5',
    description: 'I am skilled in creating user-friendly and intuitive designs for web applications and websites. I offer personalized design and development services.',
    image: '/p5.png',
  },
  {
    title: 'Project 6',
    description: 'I specialize in creating engaging and effective digital marketing campaigns for businesses. I offer personalized marketing and development services.',
    image: '/p6.png',
  },
];

export default function Project() {
  return (
    <div id='project' className='bg-black w-[100%] h-auto'>
      <h2 className='text-white text-[40px] font-extrabold text-center py-20'>
        Our  <span className='text-color'>Project</span>
      </h2>
      <div className='flex justify-around items-center flex-wrap mx-8 gap-10 m-10 lg:flex-nowrap'>
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className='text-white text-center border-2 border-color rounded-3xl'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={700}
                className='w-[100%] h-[200px] rounded-t-3xl md:h-[300px]'
              />
            )}
            <h3 className='text-xl font-extrabold py-7 md:text-2xl lg:text-3xl'>{project.title}</h3>
            <p className='pb-5 px-3'>{project.description}</p>
            <Link href="https://governor-website-clone-6244.vercel.app/" target="_blank"><button className='py-3 px-10 bg-color my-5 rounded-2xl hover:bg-white hover:text-color'>
              Read More
            </button></Link>
          </div>
        ))}
      </div>
      <div className='flex justify-around items-center flex-wrap mx-8 gap-10 lg:flex-nowrap'>
        {projects.slice(3, 6).map((project, index) => (
          <div key={index} className='text-white text-center border-2 border-color rounded-3xl'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={700}
                className='w-[100%] h-[200px] rounded-t-3xl'
              />
            )}
            <h3 className='text-3xl font-extrabold py-7'>{project.title}</h3>
            <p className='pb-5 px-3'>{project.description}</p>
            <button className='py-3 px-10 bg-color my-5 rounded-2xl hover:bg-white hover:text-color'>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
