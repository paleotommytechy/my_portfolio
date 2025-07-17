export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  link?: string; // optional external link
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How I Built My Portfolio with React and Vite',
    date: 'July 2025',
    excerpt: 'A walkthrough of the tools, design, and challenges I faced building this site.',
    content:`Creating my personal portfolio was an exciting opportunity to showcase my skills while experimenting with modern web technologies. I chose React for its component-based architecture and Vite as my build tool because of its speed and developer-friendly setup.

    Why React and Vite?
    React is my go-to JavaScript library for building interactive UIs, and Vite offers an incredibly fast development experience with instant hot module replacement (HMR). Unlike older setups like Create React App, Vite starts up almost instantly and provides out-of-the-box support for modern JavaScript features.

    The Process
    1. Setup: I used npm create vite@latest to quickly scaffold a new project. Choosing the React + JavaScript (or TypeScript) template saved me a lot of setup time.

    2. Design: I built reusable components for my navbar, project cards, and contact form. I kept the UI clean and responsive using CSS Modules and Flexbox/Grid.

    3. Projects & Content: I structured my portfolio to include an introduction, a list of featured projects with GitHub/demo links, and a contact section. I kept the content minimal but impactful.

    4. Deployment: I hosted the final build on Vercel, which integrates seamlessly with GitHub and Vite for continuous deployment.

    Final Thoughts
    Using Vite with React made the development process incredibly smooth and efficient. I highly recommend this stack to anyone looking to build a fast, modern web app or portfolio.

.`,
  },
  {
    id: 2,
    title: 'Top 5 Tips for React Developers',
    date: 'June 2025',
    excerpt: 'If you want to level up your React skills, these are must-know patterns...',
    content:`Top 5 Tips for React Developers

Whether you're just starting out or looking to refine your skills, these top 5 tips can help you write cleaner, more efficient React code:

Use Functional Components and Hooks
Prefer functional components over class components. They're simpler, more readable, and allow you to use powerful features like useState, useEffect, and custom hooks for managing logic and side effects.

Keep Components Small and Focused
Break down UI into small, reusable components. Each component should do one thing well. This improves readability, maintainability, and makes testing easier.

Leverage the Power of Props and State Wisely
Understand the difference between props and state. Pass data down via props and manage local data with state. Avoid prop-drilling by using context or state management libraries when needed.

Optimize Performance
Use React.memo, useMemo, and useCallback to avoid unnecessary re-renders. Also, consider code-splitting and lazy loading components with React.lazy and Suspense to enhance performance.

Follow Best Practices and Conventions
Stick to consistent naming conventions, file structures, and code formatting. Use tools like ESLint and Prettier, and always write meaningful commit messages and comments.

Mastering these practices can significantly improve the quality and scalability of your React applications.
`,
  },
];
