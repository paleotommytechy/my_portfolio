import project1 from '/src/assets/projects/project1.png'
import project2 from '/src/assets/projects/project2.png'
import project3 from '/src/assets/projects/project3.png'
import project4 from '/src/assets/projects/project4.png'


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'All Christian Fellowship Webiste',
    description: 'Church Webiste with event updates, sermons, donation system e.t.c.',
    image: project1,
    github: 'https://github.com/paleotommytechy/accfikolewebsite',
    demo: 'https://accfikolewebsite.vercel.app',
    tech: ['React','Bootstrap', 'Vercel', 'Git', 'GitHub', 'firebase'],
  },
  {
    id: 2,
    title: 'Jilem - Ministry website',
    description: 'Responsive ministry platform for media sharing and spiritual resources.',
    image: project2,
    github: 'https://github.com/paleotommytechy/jilem',
    demo: 'https://jilem.vercel.app',
    tech: ['React', 'Bootstrap','Vercel', 'Git', 'GitHub', 'firebase'],
  },
  {
    id: 3,
    title: 'Tommytech Store',
    description: 'E-commerce web app for gadgets, tech tools, and developer kit.',
    image: project4,
    github: 'https://github.com/paleotommytechy/codealpha_tasks',
    demo: 'https://tommytech-store.onrender.com/',
    tech: ['Django', 'Bootstrap','Render', 'Git', 'GitHub'],
  },
  {
    id: 4,
    title: 'Tommify - Social Web App',
    description: 'Faith-based social app for post, discussion, and spiritual growth.',
    image: project3,
    github: 'https://github.com/paleotommytechy/tommify',
    demo: 'https://tommify.onrender.com',
    tech: ['Django', 'Bootstrap','Render', 'Git', 'GitHub'],
  },
];
