export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0 to 100
  }[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Bootstrap', level: 95 },
      { name: 'Framer Motion', level: 50 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', level: 85 },
      { name: 'Node.js', level: 10 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Figma', level: 35 },
      { name: 'CI/CD', level: 20 },
    ],
  },
];
