const personalInformation = {
  name: 'Ramiro Depaoli',
  title: 'Backend Developer',
  location: 'San Pedro, Buenos Aires, Argentina',
  nationality: 'Argentinian',
  phone: '+54 3329 534426',
  email: 'ramiro.depaoli@gmail.com',
  github: 'https://github.com/ramide1',
  linkedin: 'https://www.linkedin.com/in/ramiro-depaoli/',
  about: 'Backend Developer with 5+ years of experience in Node.js, Bun, PHP, Docker, and Linux. Skilled in building scalable APIs and managing servers in agile environments. Focused on delivering efficient backend solutions that optimize business processes. (Open to remote positions)'
};

const experience = [
  {
    company: 'GESTIONEM ARTIS S.A. (GESDATTA)',
    link: 'https://gesdatta.com',
    imageUrl: 'https://gesdatta.com/wp-content/uploads/2020/03/Diseno-sin-titulo-2.png',
    location: 'San Pedro, Buenos Aires, Argentina',
    position: 'Fullstack Developer',
    startDate: '12/2022',
    endDate: '02/2026',
    points: [
      'Maintained and evolved enterprise web applications, ensuring stability and scalability.',
      'Developed and deployed new features using PHP, Node.js, Bun and Angular.',
      'Improved system performance by optimizing REST APIs and backend processes.',
      'Collaborated with cross-functional teams in agile environments.'
    ]
  },
  {
    company: 'ISFT 118',
    link: 'https://www.facebook.com/isft118',
    imageUrl: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/304944848_415231087265018_8392148817878034642_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=4ODKu-2SbbgQ7kNvwFDpiz3&_nc_oc=AdlZVsDZPUBsJfi65u3aia9-InKPbFfHyWuEV6AYNkGaAXGLy2E4ewJE3zs045HhCVI&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=uQ2auj1nGELzBXxqpTd2LQ&_nc_ss=8&oh=00_AfzLHTInX3I_LToWvzpvaaB24w_eyfjQPLqiRioKBv5h4w&oe=69BBD8A7',
    location: 'San Pedro, Buenos Aires, Argentina',
    position: 'Backend Developer',
    startDate: '04/2022',
    endDate: '12/2022',
    points: [
      'Built web applications for academic projects with Node.js.',
      'Configured and administered Linux servers, supporting deployment processes.',
      'Provided technical support and contributed to project documentation.',
      'Learned how to work in a team environment, collaborate across roles, and understand how software development projects are structured and delivered.'
    ]
  }
];

const projects = [
  {
    title: 'WhatsApp AI Bot',
    description: 'Integrated AI API with WhatsApp',
    link: 'https://github.com/ramide1/bot-wp',
    tags: ['AI', 'WhatsApp', 'Node.js']
  },
  {
    title: 'Arduino System',
    description: 'IoT solution with fingerprint and sensor control.',
    link: 'https://github.com/ramide1/sistema-arduino',
    tags: ['Arduino', 'IoT', 'C++']
  }
];

const education = [
  {
    degree: 'Advanced Web Programming',
    institution: 'UTN',
    year: '2023 - 2023'
  },
  {
    degree: 'Technical English',
    institution: 'Instituto Cultural de Inglés (ICI)',
    year: '2021 - 2022'
  },
  {
    degree: 'Higher Technician in Systems Analysis',
    institution: 'ISFT 118',
    year: '2020 - 2022'
  },
  {
    degree: 'High School Diploma',
    institution: 'Colegio San Francisco de Asis',
    year: '2014 - 2019'
  }
];

const languageSkills = {
  mother: 'Spanish',
  other: [
    { language: 'English', understanding: { listening: 'C1', reading: 'C1' }, speaking: { production: 'B2', interaction: 'B2' }, writing: 'B1' }
  ]
};

const hardSkills = [
  'PHP', 'Node.js', 'Bun', 'MySQL', 'TypeScript', 'Windows OS', 'Angular', 'JavaScript',
  'Linux server administration', 'Docker', 'HTML', 'MongoDB', 'Java', 'REST APIs',
  'PostgreSQL', 'Git/GitHub', 'Requirements analysis', 'Agile methodologies (Scrum/Agile)',
  'Scalability & performance optimization'
];

const softSkills = [
  'Critical thinking', 'Teamwork', 'Adaptability', 'Problem-solving', 'Time management', 'Communication'
];

const baseUrl = import.meta.env.BASE_URL;

const cvFiles = {
  en: baseUrl + '/files/Ramiro-Depaoli-CV-EN.pdf',
  es: baseUrl + '/files/Ramiro-Depaoli-CV-ES.pdf',
  utn: baseUrl + '/files/utn.pdf'
};

const profileImage = baseUrl + '/files/ramiro-fotor-bg-remover-20250817113657.png';

export { personalInformation, experience, projects, education, languageSkills, hardSkills, softSkills, cvFiles, profileImage }