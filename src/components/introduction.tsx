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
            className='mb-0 text-center xl:mb-0 scroll-mt-[100rem] xl:flex xl:flex-row xl:gap-[8rem] md:flex md:flex-col'
            id='home'
        >
            <div className='flex items-center justify-center xl:hidden'>
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
                                className='h-24 w-24 md:w-40 md:h-40 block rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='max-w-4xl'>
                <motion.p
                    className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl sm:text-justify text-center'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className='font-bold'>{`Hello, I'm Kenrick.`}</span>{' '}
                    {`I'm a`}{' '}
                    <span className=''>
                        <span className='font-bold'>Software Engineer and SQI Intern </span>
                        at PT Bank Central Asia Tbk (BCA)
                    </span>{' '}
                    with <span className='font-bold'>3 years</span> of learning.{' '}
                    {`I'm`} really interested into{' '}
                    <span className='italic'>full-stack development</span>.{' '}
                    {`I'm `}
                    currently learning{' '}
                    <span className='underline'>Go and Next.js</span>.
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
            </div>
            <motion.div 
        className='bg-black xl:my-8 xl:h-[20rem] w-1 rounded-full hidden xl:block'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.125}}
        ></motion.div>
            <div className='flex items-center justify-center md:hidden xl:block my-8'>
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
                                className='sm:h-80 sm:w-80 hidden sm:block rounded-full object-cover border-[0.35rem] border-white shadow-2xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
