import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Shield, FileText, Briefcase, ChevronDown, Menu, X, Calendar, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const experiences = [
    {
      company: "usepuplar",
      role: "Operations Officer",
      period: "2025 - Present",
      location: "Hybrid",
      responsibilities: [
        "Leading backend development initiatives for enterprise-scale applications handling 10M+ daily requests",
        "Implementing comprehensive security protocols and conducting regular penetration testing audits",
        "Architecting and maintaining microservices infrastructure using Node.js, Python, and Go",
        "Managing B2B compliance workflows and automating regulatory processes, reducing processing time by 70%",
        "Creating and maintaining technical documentation for APIs and internal systems",
        "Overseeing team operations and coordinating cross-functional development efforts"
      ],
      achievements: [
        "Built scalable API gateway with OAuth2 authentication serving millions of requests",
        "Reduced security vulnerabilities by 85% through proactive auditing and implementation",
        "Automated compliance workflows saving 40+ hours per week in manual processing"
      ]
    },
    {
      company: "BondedThruCancer",
      role: "Backend Developer",
      period: "2025 - 2026",
      location: "Remote",
      responsibilities: [
        "Developed RESTful APIs serving 5M+ daily users with 99.9% uptime",
        "Implemented microservices architecture reducing deployment time by 60%",
        "Led security audits and penetration testing for critical systems",
        "Mentored junior developers and conducted code reviews"
      ],
      achievements: [
        "Optimized database queries reducing response time by 75%",
        "Implemented Redis caching layer handling 100K requests per second",
        "Designed CI/CD pipeline reducing deployment time from hours to minutes"
      ]
    },
    {
      company: "Primforte Technology Limited",
      role: "Full Stack Developer",
      period: "2025 - 2026",
      location: "On-site",
      responsibilities: [
        "Built customer-facing web applications using React and Node.js",
        "Developed internal tools for compliance and reporting automation",
        "Implemented OAuth2 authentication and role-based access control",
        "Created comprehensive API documentation for external partners"
      ],
      achievements: [
        "Launched MVP that acquired 10K users in first 3 months",
        "Reduced manual compliance reporting from 2 days to 2 hours",
        "Built documentation portal that reduced support tickets by 40%"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "A deep dive into architecting microservices that can handle millions of requests with optimal performance.",
      url: "https://medium.com/@yourusername/building-scalable-microservices",
      platform: "Medium",
      date: "Dec 2025"
    },
    {
      title: "API Security Best Practices for 2026",
      excerpt: "Essential security patterns and techniques every backend developer should implement.",
      url: "https://dev.to/yourusername/api-security-best-practices",
      platform: "Dev.to",
      date: "Jan 2026"
    },
    {
      title: "Automating Compliance Workflows in B2B",
      excerpt: "How we reduced manual compliance processing by 70% using automation and smart workflows.",
      url: "https://yourblog.com/compliance-automation",
      platform: "Personal Blog",
      date: "Nov 2025"
    },
    {
      title: "From Penetration Testing to Production Security",
      excerpt: "Lessons learned from conducting security audits and implementing defensive measures.",
      url: "https://hashnode.com/@yourusername/penetration-testing",
      platform: "Hashnode",
      date: "Oct 2025"
    }
  ];

  const projects = [
    {
      title: "Enterprise API Gateway",
      description: "Built scalable API gateway handling 10M+ requests daily with OAuth2 authentication and rate limiting.",
      tech: ["Node.js", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/api-gateway",
      live: "https://api-demo.example.com",
      category: "backend"
    },
    {
      title: "Compliance Automation System",
      description: "Automated B2B compliance workflows reducing manual processing time by 70%.",
      tech: ["Python", "FastAPI", "MongoDB", "Celery"],
      github: "https://github.com/yourusername/compliance-automation",
      live: "https://compliance.example.com",
      category: "operations"
    },
    {
      title: "Security Audit Dashboard",
      description: "Real-time security monitoring dashboard with threat detection and automated responses.",
      tech: ["React", "GraphQL", "Elasticsearch", "Kibana"],
      github: "https://github.com/yourusername/security-dashboard",
      live: "https://security-demo.example.com",
      category: "security"
    },
    {
      title: "API Documentation Generator",
      description: "Automated technical documentation generator from OpenAPI specs with interactive examples.",
      tech: ["TypeScript", "Next.js", "Swagger", "MDX"],
      github: "https://github.com/yourusername/doc-generator",
      live: "https://docs-gen.example.com",
      category: "documentation"
    },
    {
      title: "Microservices Orchestrator",
      description: "Container orchestration system for managing distributed microservices architecture.",
      tech: ["Kubernetes", "Go", "gRPC", "Prometheus"],
      github: "https://github.com/yourusername/orchestrator",
      category: "backend"
    },
    {
      title: "Penetration Testing Suite",
      description: "Comprehensive security testing toolkit for web applications and APIs.",
      tech: ["Python", "Burp Suite", "OWASP ZAP", "Metasploit"],
      github: "https://github.com/yourusername/pentest-suite",
      category: "security"
    }
  ];

  const skills = [
    "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
    "Penetration Testing", "OWASP", "Security Audits", "OAuth2/JWT", "Encryption",
    "B2B Workflows", "Compliance", "Process Automation", "Team Leadership",
    "Technical Writing", "API Documentation", "OpenAPI/Swagger"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <head>
        <meta name="description" content="Operations Officer at usepuplar - Backend Developer, Cybersecurity Specialist, B2B Compliance Expert, and Technical Documentation Writer. Specializing in Node.js, Python, API Security, and Microservices Architecture." />
        <meta name="keywords" content="Operations Officer, Backend Developer, Cybersecurity Specialist, API Developer, Node.js Developer, Python Developer, B2B Compliance, Technical Documentation Writer, API Documentation, Microservices, Docker, Kubernetes, OAuth2, JWT, Security Audits, Penetration Testing, OWASP, PostgreSQL, MongoDB, Redis, FastAPI, GraphQL, Elasticsearch, System Architecture, DevOps, Cloud Security, Software Engineering, Full Stack Developer, Tech Lead" />
        <meta name="author" content="Operations Officer - usepuplar" />
        <meta property="og:title" content="Operations Officer - Backend Developer & Cybersecurity Specialist" />
        <meta property="og:description" content="Expert in backend development, cybersecurity, B2B compliance, and technical documentation. Building secure, scalable systems with Node.js, Python, and modern tech stack." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Operations Officer - Backend Developer & Cybersecurity Specialist" />
        <meta name="twitter:description" content="Expert in backend development, cybersecurity, B2B compliance, and technical documentation." />
        <title>Operations Officer - Backend Developer | Cybersecurity Specialist | usepuplar</title>
      </head>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          scroll-behavior: smooth;
        }

        #root {
          width: 100%;
          overflow-x: hidden;
        }

        .portfolio-container {
          min-height: 100vh;
          width: 100%;
          background: 
            radial-gradient(circle at 15% 20%, rgba(239, 68, 68, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(220, 38, 38, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(254, 226, 226, 0.3) 0%, transparent 60%),
            linear-gradient(135deg, #fef2f2 0%, #ffffff 25%, #fff1f2 50%, #fef2f2 75%, #ffffff 100%);
          background-attachment: fixed;
          color: #1f2937;
          position: relative;
        }

        /* Navigation */
        .nav-bar {
          position: fixed;
          width: 100%;
          z-index: 50;
          transition: all 0.3s;
        }

        .nav-bar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.1);
          border-bottom: 1px solid rgba(239, 68, 68, 0.1);
        }

        .nav-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .nav-logo {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-menu {
          display: none;
          gap: 2rem;
        }

        .nav-menu button {
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-menu button:hover {
          color: #dc2626;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }

        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          padding: 0.5rem;
          border-bottom: 1px solid rgba(239, 68, 68, 0.1);
        }

        .mobile-menu button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: all 0.3s;
          font-weight: 500;
        }

        .mobile-menu button:hover {
          color: #dc2626;
          background: rgba(254, 226, 226, 0.5);
        }

        @media (min-width: 768px) {
          .nav-menu {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero-content {
          text-align: center;
          max-width: 56rem;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 4px 20px rgba(220, 38, 38, 0.1);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        .hero-role {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          font-weight: 600;
        }

        .hero-description {
          color: #6b7280;
          font-weight: 500;
        }

        .hero-badge {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #374151;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 600;
          border: 2px solid #fecaca;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.08);
          transition: all 0.3s;
        }

        .hero-badge:hover {
          border-color: #dc2626;
          background: #fef2f2;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .social-link {
          padding: 0.75rem;
          background: white;
          border-radius: 9999px;
          border: 2px solid #fecaca;
          transition: all 0.3s;
          display: inline-flex;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.1);
        }

        .social-link:hover {
          transform: scale(1.1) translateY(-2px);
          border-color: #dc2626;
          background: #fef2f2;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.2);
        }

        /* Section Styles */
        .section {
          padding: 5rem 1rem;
        }

        .section-min-height {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .section-content {
          max-width: 64rem;
          margin: 0 auto;
          width: 100%;
        }

        .section-content-wide {
          max-width: 72rem;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* About Card */
        .about-card {
          background: white;
          backdrop-filter: blur(4px);
          padding: 2rem;
          border-radius: 1rem;
          border: 2px solid #fecaca;
          box-shadow: 0 10px 40px rgba(220, 38, 38, 0.08);
        }

        .about-text {
          font-size: 1.125rem;
          color: #4b5563;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        /* Experience Section */
        .experience-carousel {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 2rem 0;
        }

        .experience-track {
          display: flex;
          gap: 2rem;
          animation: scrollLeft 30s linear infinite;
          width: max-content;
        }

        .experience-track:hover {
          animation-play-state: paused;
        }

        .experience-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          border: 2px solid #fecaca;
          box-shadow: 0 10px 40px rgba(220, 38, 38, 0.08);
          min-width: 450px;
          max-width: 450px;
          flex-shrink: 0;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .experience-title {
          flex: 1;
        }

        .experience-company {
          font-size: 1.75rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 0.5rem;
        }

        .experience-role {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: #6b7280;
          font-size: 0.95rem;
        }

        .experience-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .experience-section {
          margin-bottom: 1.5rem;
        }

        .experience-section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #991b1b;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .experience-list {
          list-style: none;
          padding: 0;
        }

        .experience-list li {
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
          line-height: 1.6;
          position: relative;
        }

        .experience-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #dc2626;
          font-weight: bold;
        }

        /* Skills Section */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .skill-tag {
          padding: 0.75rem 1.25rem;
          background: white;
          color: #374151;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 2px solid #fecaca;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.05);
        }

        .skill-tag:hover {
          border-color: #dc2626;
          background: #fef2f2;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.12);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          gap: 1.5rem;
        }

        .project-card {
          background: white;
          backdrop-filter: blur(4px);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 2px solid #fecaca;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.06);
        }

        .project-card:hover {
          border-color: #dc2626;
          box-shadow: 0 10px 40px rgba(220, 38, 38, 0.15);
          transform: translateY(-4px);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .project-description {
          color: #6b7280;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 0.25rem;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid #fecaca;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .project-link:hover {
          color: #dc2626;
        }

        /* Contact Section */
        .contact-content {
          text-align: center;
        }

        .contact-description {
          font-size: 1.25rem;
          color: #4b5563;
          margin-bottom: 3rem;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s;
          border: none;
          color: white;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #991b1b, #7f1d1d);
          box-shadow: 0 12px 35px rgba(220, 38, 38, 0.4);
          transform: translateY(-2px);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          background: white;
          border: 2px solid #dc2626;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s;
          color: #dc2626;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.1);
        }

        .btn-secondary:hover {
          background: #fef2f2;
          border-color: #991b1b;
          color: #991b1b;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.2);
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(254, 226, 226, 0.3));
          backdrop-filter: blur(4px);
          border-top: 2px solid #fecaca;
          padding: 2rem 1rem;
        }

        .footer-content {
          max-width: 72rem;
          margin: 0 auto;
          text-align: center;
          color: #6b7280;
        }

        /* Responsive Grid */
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          .section-title {
            font-size: 3rem;
          }
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-buttons {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="portfolio-container">
        {/* Navigation */}
        <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <div className="nav-inner">
              <div className="nav-logo">PrimForte</div>

              <div className="nav-menu">
                {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>

              <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="animate-fade-in">
              <h1 className="hero-title">Ephraim C. Norbert</h1>
              <div className="hero-subtitle">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                  <span className="hero-badge">Backend Developer</span>
                  <span className="hero-badge">Cybersecurity Specialist</span>
                  <span className="hero-badge">B2B & Compliance</span>
                  <span className="hero-badge">Technical Writer</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} style={{ color: '#374151' }} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} style={{ color: '#374151' }} />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail size={24} style={{ color: '#374151' }} />
              </a>
            </div>

            <button onClick={() => scrollToSection('about')} className="animate-bounce" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <ChevronDown size={32} style={{ color: '#dc2626' }} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section-min-height">
          <div className="section-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
              <p className="about-text">
                I'm a versatile technology professional who thrives at the intersection of development, security, and operations. As a <strong style={{ color: '#dc2626' }}>Backend Developer</strong>, I architect and build scalable systems using javascript, Nodejs, Nestjs, and Python creating APIs and microservices that handle millions of requests daily while maintaining optimal performance and reliability.
              </p>
              <p className="about-text">
                My expertise as a <strong style={{ color: '#dc2626' }}>Cybersecurity Specialist</strong> ensures that every system I build is fortified against threats. From conducting penetration testing and security audits to implementing OAuth2 authentication and encryption protocols, I approach security not as an afterthought but as a fundamental architectural principle. I've successfully reduced security vulnerabilities by 85% through proactive auditing and implementation of industry-standard security measures.
              </p>
              <p className="about-text">
                In the realm of <strong style={{ color: '#dc2626' }}>B2B & Compliance</strong>, I've transformed operational efficiency by automating complex regulatory workflows and building systems that ensure seamless adherence to compliance requirements. My work in this space has reduced manual processing time by 70%, allowing teams to focus on strategic initiatives rather than repetitive tasks. I understand that in B2B environments, compliance isn't just a checkbox it's a competitive advantage.
              </p>
              <p className="about-text">
                As a <strong style={{ color: '#dc2626' }}>Technical Writer</strong>, I bridge the gap between complex systems and the people who use them. I create comprehensive API documentation, system architecture guides, and technical specifications that empower developers and stakeholders alike. My documentation philosophy is simple: if it's not documented, it doesn't exist. I use tools like OpenAPI/Swagger, Confluence, and custom documentation generators to ensure knowledge is accessible, accurate, and actionable.
              </p>
              <p className="about-text">
                What sets me apart is my ability to see the bigger picture understanding how backend infrastructure, security protocols, compliance requirements, and clear documentation work together to create systems that are not just functional, but exceptional. I'm passionate about building solutions that are secure by design, compliant by architecture, and documented for longevity.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-content">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-carousel">
              <div className="experience-track">
                {[...experiences, ...experiences].map((experience, idx) => (
                  <div key={idx} className="experience-card">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h3 className="experience-company">{experience.company}</h3>
                        <p className="experience-role">{experience.role}</p>
                      </div>
                      <div className="experience-meta">
                        <div className="experience-meta-item">
                          <Calendar size={16} style={{ color: '#dc2626' }} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="experience-meta-item">
                          <MapPin size={16} style={{ color: '#dc2626' }} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="experience-section">
                      <h4 className="experience-section-title">
                        <Briefcase size={18} />
                        Key Responsibilities
                      </h4>
                      <ul className="experience-list">
                        {experience.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience-section">
                      <h4 className="experience-section-title">
                        <Shield size={18} />
                        Key Achievements
                      </h4>
                      <ul className="experience-list">
                        {experience.achievements.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-content-wide">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-container">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-content-wide">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div key={idx} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={16} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section">
          <div className="section-content-wide">
            <h2 className="section-title">Blog & Articles</h2>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem' }}>
              I write about backend development, cybersecurity, operations, and technical best practices.
            </p>
            <div className="projects-grid">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="project-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 className="project-title" style={{ marginBottom: 0 }}>{post.title}</h3>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                    <span style={{ color: '#dc2626', fontWeight: '600' }}>{post.platform}</span>
                    <span style={{ color: '#9ca3af' }}>•</span>
                    <span style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <p className="project-description">{post.excerpt}</p>
                  <div className="project-links">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} /> Read Article
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-min-height">
          <div className="section-content contact-content">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-description">
              I'm always open to discussing new opportunities, collaborations, or interesting projects.
            </p>
            <div className="contact-buttons">
              <a href="mailto:your.email@example.com" className="btn-primary">
                Send Email
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Operations Officer Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}