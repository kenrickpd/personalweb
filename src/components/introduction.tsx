'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Introduction() {
    const { ref, inView } = useInView({
        threshold: 0.4
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Home');
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section
            ref={ref}
            className='mb-0 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
            id='home'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                    >
                        <Image
                            src='/Pasfoto_Kenrick.jpeg'
                            alt='pas foto'
                            width='603'
                            height='646'
                            quality='95'
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1'
                        />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0 text-3xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >
                        👋🏻
                    </motion.span>
                </div>
            </div>
            <motion.p
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, I am Kenrick.</span> I am an{' '}
                <span className=''>
                    undergraduate{' '}
                    <span className='font-bold'>computer science </span>
                    student at Bina Nusantara
                </span>{' '}
                with <span className='font-bold'>2 years</span> of learning. I
                am really intrested into{' '}
                <span className='italic'>back-end development</span>. I am
                currently learning{' '}
                <span className='underline'>Express.js and Next.js</span>.
            </motion.p>

            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <a
                    href='/Portfolio_KenrickPancaDewanto.pdf'
                    className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    download
                >
                    Download my Portfolio <HiDownload />
                </a>
                <a
                    className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
                    href='/CV_KenrickPancaDewanto.pdf'
                    download
                >
                    Download my CV <HiDownload />
                </a>
                <div className='flex items-center gap-4'>
                    <a
                        className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
                        href='https://www.linkedin.com/in/kenrick-dewanto-411470256/'
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
                        href='https://github.com/kenrickpd'
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
