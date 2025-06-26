export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    img: 'assets/review1.png',
    review:
      'Working with Shubham was a fantastic experience. He transformed our outdated website into a sleek, user-friendly platform. His attention to detail and strong grasp of modern UI/UX practices made all the difference.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    img: 'assets/review2.png',
    review:
      'Shubham’s full-stack expertise is truly impressive. He built a robust, scalable e-commerce platform for us using React and Node.js. Our sales saw a clear boost after launch. Highly recommend his work!',
  },
  {
    id: 3,
    name: 'John Dohsas',
    img: 'assets/review3.png',
    review:
      'Shubham was able to take our complex requirements and turn them into a smooth, responsive website. His problem-solving skills and dedication to quality really stood out throughout the project.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    img: 'assets/review4.png',
    review:
      'It was a pleasure collaborating with Shubham. He quickly understood our vision and delivered beyond expectations. His frontend and backend development skills are top-tier, and his communication is excellent.',
  },
];


export const myProjects = [
  {
   
    title: 'Fit Club - Gym Website',
    desc: 'A modern, responsive gym website with user registration, plan selection, and backend integration.',
    subdesc: 'Built with React, Framer Motion, MongoDB backend, and deployed frontend/backend separately.',
    href: 'https://fitclubshubhamchand.pages.dev/',
   texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#7c3aed',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
   title: 'Chat App',
    desc: 'A real-time chat application with private rooms and live message updates.',
    subdesc: 'Built using Socket.IO, Node.js, and Express on the backend; React on the frontend.',
    href: 'https://frontend-chat-us02.onrender.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
    {
   title: 'Imagify - AI Image Generator',
  desc: 'Imagify is an AI-powered application that generates high-quality images from text prompts using advanced machine learning models.',
  subdesc:
    'Users can enter custom prompts, generate unique AI images via the Replicate API, and download them instantly. The app includes a Razorpay payment gateway for purchasing image generation credits. Built with Next.js and Tailwind CSS, and deployed on Render for seamless performance.',
    href: 'https://imagify-exe9.onrender.com/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1f2937',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bluestock Company',
    pos: 'Frontend Development Intern',
    duration: '2024 (2 months)',
    title:
      'Worked as a frontend development intern, where I built responsive UI components using React, collaborated with backend teams, and integrated REST APIs to enhance user experience.',
    icon: '/assets/framer.svg',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
     id: 3,
    name: 'Guvi (Python World Record)',
    pos: 'Python Enthusiast',
    duration: '2023',
    title:
      'Contributed to setting a Guinness World Record through Guvi by participating in the largest Python programming event, showcasing my enthusiasm for coding and learning.',
     icon: '/assets/figma.svg',
    animation: 'idle',
  },
  {
    id: 4,
    name: 'Project Experience',
    pos: 'Full Stack Developer',
    duration: '2022 - Present',
    title:
      'Built real-world projects like a Fit Club gym website with React and MongoDB, a real-time Chat App using Socket.io, and a Currency Converter app with live API integration. Strong hands-on skills in React, Node.js, Express, MongoDB, MySQL, EmailJS, Zustand, Tailwind, and GSAP.',
      icon: '/assets/framer.svg',
    animation: 'victory',
  },
];

