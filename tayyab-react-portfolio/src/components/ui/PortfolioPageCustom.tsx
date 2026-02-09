import React from 'react';
import { PortfolioPage, PortfolioPageProps } from './starfall-portfolio-landing';

const tayyabPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'TM',
    name: 'Tayyab Mushtaq',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ],
  resume: {
    label: 'Resume',
    onClick: () => {
      window.open('/projects/Tayyab-Mushtaq-Resume.pdf', '_blank');
    },
  },
  hero: {
    titleLine1: 'Full Stack Engineer &',
    titleLine2Gradient: 'Technical Lead',
    subtitle: 'I\'m a passionate Full Stack Engineer and Technical Lead with over 3 years of experience building and scaling modern web applications. I\'ve led cross-functional teams, designed system architectures, and delivered high-quality solutions using technologies like Next.js, React.js, TypeScript, Node.js, and Express.js. My work focuses on creating fast, reliable, and user friendly products while keeping performance, security, and scalability in mind. I enjoy solving complex problems, integrating tools like Stripe, MSD, and ZOHO to enhance user experience, and working in agile environments where collaboration and innovation thrive.',
  },
  ctaButtons: {
    primary: {
      label: 'View My Work',
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () => {
        window.location.href = 'mailto:tayyabmushtaq15@gmail.com?subject=Portfolio Inquiry';
      },
    },
  },
  projects: [
    {
      title: 'Velive – Property Management Platform',
      description: 'Worked as a Full Stack Engineer contributing to a comprehensive property management platform with features like property search, tenant screening, lease and financial management, and maintenance requests. Enhanced performance and user experience through optimized React and Next.js components.',
      tags: ['React', 'Next.js', 'Full Stack', 'Property Management'],
      imageContent: (
        <img 
          src="/projects/velive-thumbnail.jpg" 
          alt="Velive Property Management Platform" 
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            e.currentTarget.style.display = 'none';
          }}
        />
      ),
    },
    {
      title: 'LEOS Development Dashboard',
      description: 'Built and maintained an internal platform designed for C panel personnel to manage and monitor company operations efficiently. Implemented RESTful APIs and database integrations to streamline data flow between client and admin systems. Collaborated with cross-functional teams to ensure seamless deployment, security, and scalability.',
      tags: ['React', 'Next.js', 'RESTful APIs', 'Database Integration'],
      imageContent: (
        <img 
          src="/projects/leos-dashboard-thumbnail.jpg" 
          alt="LEOS Development Dashboard" 
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            e.currentTarget.style.display = 'none';
          }}
        />
      ),
    },
    {
      title: 'Caremetrix – NHS-Compliant Health Analytics Platform',
      description: 'Developed interactive dashboards for practice data analytics. Applied caching and optimization techniques to improve performance by 30%. Contributed to the development of a healthcare analytics platform with real-time data insights.',
      tags: ['React.js', 'Data Analytics', 'Performance Optimization', 'Healthcare'],
      imageContent: null, // Image will be added later
    },
    {
      title: 'Accrepro Analytical Reporting Dashboard',
      description: 'Created Power BI-inspired components for real-time data monitoring. Integrated caching mechanisms on both frontend and backend. Developed an analytical reporting website with robust functionality to store reporting data, upload CSV files, and connect to databases for schema extraction.',
      tags: ['ReactJS', 'Power BI', 'Redux', 'Ant Design', 'Caching'],
      imageContent: null, // Image will be added later
    },
    {
      title: 'GROW – Agriculture Branding Website',
      description: 'Built a static responsive website promoting ethical sourcing and sustainability in farming. Focused on creating an engaging user experience with modern web technologies.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      imageContent: (
        <img 
          src="/projects/grow-thumbnail.jpg" 
          alt="GROW Agriculture Branding Website" 
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            e.currentTarget.style.display = 'none';
          }}
        />
      ),
    },
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '5+', label: 'Key Projects' },
    { value: '5', label: 'Certifications' },
  ],
  showAnimatedBackground: true,
};

const PortfolioPageCustom: React.FC = () => {
  const experiences = [
    {
      company: 'LEOS International',
      role: 'Full Stack Developer',
      period: '09/2025 – Present',
      location: 'Islamabad, Pakistan',
      achievements: [
        'Contributed to the development of velive.co.uk, enhancing performance and user experience through optimized React and Next.js components',
        'Contributed in the LEOS Official Mobile App Backend',
        'Built and maintained the Leos Development Dashboard, an internal platform designed for C panel personnel to manage and monitor company operations efficiently',
        'Implemented RESTful APIs and database integrations to streamline data flow between client and admin systems',
        'Collaborated with cross-functional teams to ensure seamless deployment, security, and scalability of both frontend and backend systems',
      ],
    },
    {
      company: '31Green',
      role: 'Frontend Developer',
      period: '03/2024 – 09/2025',
      location: 'Islamabad, Pakistan',
      achievements: [
        'Led end-to-end development of scalable web applications, overseeing frontend architecture',
        'Developed and maintained responsive web interfaces using React.js, JavaScript, HTML5, and CSS3',
        'Collaborated with design and backend teams to implement user-friendly, functional UIs',
        'Contributed to dashboard enhancements, data display logic, and embedding external apps with SSO integration',
        'Integrated Power BI dashboards into web apps, enabling data-driven decision-making through real-time business insights',
        'Customized Power BI reports based on user roles, ensuring secure and personalized data access',
        'Contributed in www.caremetrix.co.uk, accrepro.com',
      ],
    },
    {
      company: 'Geek Axon Pvt Ltd',
      role: 'Frontend Developer',
      period: '01/2023 – 12/2023',
      location: 'Rawalpindi',
      achievements: [
        'Gained hands-on experience in building web interfaces using HTML, CSS, and JavaScript',
        'Assisted in fixing minor bugs and making UI improvements in existing projects',
        'Explored styling libraries like Bootstrap and Tailwind CSS',
        'Strengthened understanding of core frontend concepts, preparing for advanced development work',
        'Contributed in www.wajahatmansoor.com, https://blackcarboncoalition.org',
      ],
    },
  ];

  return (
    <>
      <PortfolioPage {...tayyabPortfolioData} />
      <section id="experience" className="w-full py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center geist-font tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 md:p-8 text-left">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-card-foreground mb-2 geist-font">{exp.role}</h3>
                    <p className="text-lg text-foreground font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm inter-font">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-muted-foreground text-sm inter-font font-medium">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm inter-font flex items-start">
                      <span className="text-foreground mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="w-full py-20 px-6 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center geist-font tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="skills-carousel-container">
            <div className="skills-carousel">
              {[
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
                { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="skill-logo"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if icon fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.skill-logo-fallback') as HTMLElement;
                      if (!fallback) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'skill-logo-fallback';
                        fallbackDiv.textContent = skill.name.charAt(0);
                        target.parentElement?.appendChild(fallbackDiv);
                      } else {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="skill-logo-fallback" style={{ display: 'none' }}></div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless infinite loop */}
              {[
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
                { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
              ].map((skill, index) => (
                <div key={`duplicate-${index}`} className="skill-item">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="skill-logo"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.skill-logo-fallback') as HTMLElement;
                      if (!fallback) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'skill-logo-fallback';
                        fallbackDiv.textContent = skill.name.charAt(0);
                        target.parentElement?.appendChild(fallbackDiv);
                      } else {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="skill-logo-fallback" style={{ display: 'none' }}></div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="stats" className="w-full py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="divider mb-16" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            {tayyabPortfolioData.stats?.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">{stat.value}</div>
                  <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>
                </div>
                {index < (tayyabPortfolioData.stats?.length ?? 0) - 1 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPageCustom;

