import Introduction from '@/components/introduction';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';

export default function Home() {
    return (
        <main className='flex flex-col items-center px-4 h-[5000px]'>
            <Introduction />
            <SectionDivider />
            <Projects />
        </main>
    );
}
