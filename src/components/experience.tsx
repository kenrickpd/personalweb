'use client'

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { BsBorderRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Experience() {
    const { ref, inView } = useInView({
        threshold: 0.3
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Experience');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section id='experience' className='scroll-mt-28 mb-28 sm:mb-40' ref={ref}>
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement 
                        contentStyle={{
                            background: '#f3f4f6',
                            boxShadow: 'none',
                            border: '1px solid rgba (0, 0, 0, 0.05)',
                            textAlign: 'left',
                            padding: '1.3rem 2rem'
                        }}

                        contentArrowStyle={{
                            borderRight: '0.4rem solid #9ca3af'
                        }}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{
                            background: 'white',
                            fontSize: '1.5rem'
                        }}
                        >
                            <h3 className='font-bold capitalize'>{experience.title}</h3>
                            <p className='!font-normal !mt-0 text-gray-400'>{experience.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
