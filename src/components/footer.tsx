import React from 'react';

export default function Footer() {
    return (
        <footer className='px-4 text-center bg-black text-white flex flex-col'>
            <small className='mb-2 block text-xs mt-4'>Created With 💖 by Kenrick Panca Dewanto</small>
            <p className='mb-8'>
                <span className='font-semibold'>
                    Built with React & Next.js, TypeScript, Tailwind CSS, Framer
                    Motion and deployed on Vercel.
                </span>
            </p>
        </footer>
    );
}
