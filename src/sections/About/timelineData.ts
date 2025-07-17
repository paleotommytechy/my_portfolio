export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: 'Year 1',
    title: 'Getting Started 🚀',
    description: 'Learned programming basics, built first websites, and explored C/Java.',
  },
  {
    year: 'Year 2',
    title: 'Frontend Foundations 🎨',
    description: 'Dove into HTML, CSS, JavaScript, and started working with React.',
  },
  {
    year: 'Year 3',
    title: 'Full Stack Building 🔧',
    description: 'Built full-stack projects using Django + React. Learned Git, APIs, and more.',
  },
  {
    year: 'Year 4',
    title: 'Internships & Real Projects 💼',
    description: 'Worked on real-world apps, refined portfolio, and prepared for graduation.',
  },
];
