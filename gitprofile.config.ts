// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'saj3sh', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      manual: {
        projects: [
          'saj3sh/material-science-expert',
          'saj3sh/facerecognition-attendance',
          'unique1o1/Meta-Music',
          'saj3sh/matchbox-computer',
          'saj3sh/neuro-nest',
        ], // Add your GitHub repos here if you want to highlight specific ones
      },
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Other Projects',
      projects: [
        {
          title: 'Lumbar Spine Degeneration Classifier',
          description:
            'DenseNet-201-based MRI image classifier.\n Tech: TensorFlow, Keras, OpenCV',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Face Recognition Attendance System',
          description:
            'Automated system using transfer learning.\n Tech: Flask, dlib, PostgreSQL, JavaScript',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Automatic Akhada Bot',
          description:
            'Autonomous combat robot using image processing.\n Tech: Arduino, Raspberry Pi, OpenCV',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Who is Speaking?',
          description:
            'GMM-based speaker recognition system (3rd place winner).\n Tech: Flask, Numpy, Sklearn',
          imageUrl: '',
          link: '',
        },
        {
          title: 'MetaMusic',
          description:
            'Custom hash-based song identification system.\n Tech: Python, PostgreSQL, JavaScript',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Self-Balancing Robot',
          description:
            'Two-wheeled bot using PID control.\n Tech: Arduino, MPU sensor',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sajesh Adhikari',
    description: 'Personal portfolio of Sajesh Adhikari',
    imageURL: '',
  },
  social: {
    linkedin: 'saj3sh',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+1 (605) 521-7024',
    email: 'saj3sh@gmail.com',
  },
  resume: {
    fileUrl: 'public/sajesh_cv.pdf', // Add your resume file URL if you want the download button
  },
  skills: [
    'C#',
    'Python',
    'JavaScript',
    'VB',
    'C',
    'C++',
    '.NET Core',
    'Blazor',
    'ASP.NET (WebForms, MVC)',
    'Django',
    'Flask',
    'Entity Framework',
    'Dapper',
    'OpenCV',
    'Pandas',
    'Matplotlib',
    'SQLAlchemy',
    'React JS',
    'React Native',
    'JQuery',
    'TypeScript',
    'SQL Server',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Git/GitHub',
    'Excel VBA',
  ],
  experiences: [
    {
      company: 'Yirifi.ai',
      position: 'Software Engineer',
      from: 'Feb 2023',
      to: 'Aug 2024',
      companyLink: '',
    },
    {
      company: 'Cedargate Technologies LLC',
      position: 'Senior Software Engineer',
      from: 'Nov 2021',
      to: 'Aug 2024',
      companyLink: '',
    },
    {
      company: 'Cedargate Technologies LLC',
      position: 'Software Engineer',
      from: 'Nov 2021',
      to: 'Jan 2023',
      companyLink: '',
    },
    {
      company: 'Siddhartha Bank Ltd.',
      position: 'Software Developer (Trainee Assistant)',
      from: 'Feb 2021',
      to: 'Nov 2021',
      companyLink: '',
    },
    {
      company: 'Podamibe Nepal Pvt. Ltd.',
      position: '.NET Developer',
      from: 'Jan 2020',
      to: 'Feb 2021',
      companyLink: '',
    },
    {
      company: 'LIS Nepal Pvt. Ltd.',
      position: 'Software Engineer Intern',
      from: 'May 2019',
      to: 'Aug 2019',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of South Dakota, Vermillion, SD',
      degree: 'Master’s in Computer and Information Sciences',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Tribhuvan University, Kathmandu Engineering College',
      degree: 'Bachelor’s in Computer Engineering',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Araniko Awasiya HSS, Biratnagar',
      degree: 'Intermediate (+2), Physical and Biological Science',
      from: '2013',
      to: '2015',
    },
    {
      institution: 'Eden National Secondary Boarding School, Biratnagar',
      degree: 'School Leaving Certificate',
      from: '2013',
      to: '2013',
    },
  ],
  publications: [],
  blog: {
    source: 'medium',
    username: 'saj3sh',
    limit: 3,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `<div>421 Prentis Avenue, Vermillion, SD<br/>📞 +1 (605) 521-7024 | <a href="mailto:saj3sh@gmail.com">saj3sh@gmail.com</a><br/><a href="https://www.linkedin.com/in/saj3sh" target="_blank">LinkedIn</a></div>`,

  enablePWA: true,
};

export default CONFIG;
