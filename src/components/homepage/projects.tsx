import Link from 'next/link';
import projects from '@/src/data/projectData';

export default function Project() {
    return projects.map(project => {
        return (
            <div
                className='block bg-gradient-to-br from-mantle via-mantle to-crust rounded-lg drop-shadow-md py-3 px-3 mx-auto w-full'
                key={project.name}
            >
                <div className='my-2'>
                    <Link
                        href={project.link}
                        target='_blank'
                        className='text-xl text-pink font-semibold transition duration-300 hover:text-text'
                    >
                        {project.name}
                    </Link>
                </div>
                <div>
                    <ul className='text-sm list-disc mx-4'>
                        <li className='marker:text-pink'>
                            Language(s) used: {project.language}
                        </li>
                        <li className='marker:text-pink'>
                            Date started: {project.date}
                        </li>
                    </ul>
                </div>
            </div>
        );
    });
}
